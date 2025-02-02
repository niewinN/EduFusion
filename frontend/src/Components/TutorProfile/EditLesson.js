import React, { useState, useEffect } from "react"
import { useLogin } from "../../Context/LoginContext"
import axios from "axios"
import { baseSelectOptions } from "../../Assets/Files/optionsData"
import {
	ErrorMsg,
	EditButton,
	EditSelect,
	EditLessonContainer,
	EditLessonBox,
	EditDataInfoBox,
	EditChangeBox,
	EditChange,
	EditLabel,
	EditButtonDown,
	EditSelectLast,
	EditTextarea,
	EditDays,
} from "../../Assets/Styles/TutorProfile/EditLesson.styles"

import { Title } from "../../Assets/Styles/UserProfile/Lessons.styles"

function EditLesson() {
	const [tutorData, setTutorData] = useState({
		level: [],
		mode: [],
		city: "",
		// name: '',
		desc: "",
		price: "",
		subject: "",
		availability: {
			monday: [],
			tuesday: [],
			wednesday: [],
			thursday: [],
			friday: [],
			saturday: [],
			sunday: [],
		},
		// email: '',
		// id: '',
	})
	const [isEditable, setIsEditable] = useState(false)
	const [isAvailabilityEditable, setIsAvailabilityEditable] = useState(false)
	const [newTutorData, setNewTutorData] = useState({
		level: [],
		mode: [],
		city: "",
		desc: "",
		price: "",
		subject: "",
		availability: {
			monday: [],
			tuesday: [],
			wednesday: [],
			thursday: [],
			friday: [],
			saturday: [],
			sunday: [],
		},
	})
	const token = localStorage.getItem("token")
	const { user } = useLogin()
	const [newLevel, setNewLevel] = useState("")
	const [newMode, setNewMode] = useState("")
	const [levelError, setLevelError] = useState("")
	const [modeError, setModeError] = useState("")
	const [hasTutor, setHasTutor] = useState(false)
	const initialTimeState = {
		monday: "",
		tuesday: "",
		wednesday: "",
		thursday: "",
		friday: "",
		saturday: "",
		sunday: "",
	}

	const initialErrorState = {
		monday: "",
		tuesday: "",
		wednesday: "",
		thursday: "",
		friday: "",
		saturday: "",
		sunday: "",
	}

	const daysMapping = {
		monday: "Poniedziałek",
		tuesday: "Wtorek",
		wednesday: "Środa",
		thursday: "Czwartek",
		friday: "Piątek",
		saturday: "Sobota",
		sunday: "Niedziela",
	}

	const [timeErrors, setTimeErrors] = useState(initialErrorState)

	const [newTimes, setNewTimes] = useState(initialTimeState)

	const [timeError, setTimeError] = useState("")

	const [isLevelRemovable, setIsLevelRemovable] = useState(false)
	const [isModeRemovable, setIsModeRemovable] = useState(false)
	const hoursOptions = []
	for (let i = 8; i <= 23; i++) {
		hoursOptions.push(`${String(i).padStart(2, "0")}:00`)
	}

	const fetchLoggedInTutorData = async () => {
		try {
			if (user && user.id) {
				const response = await axios.get(
					`http://localhost:8080/tutors/user/${user.id}`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
				if (response.data) {
					setTutorData(response.data)
					setHasTutor(true)
				} else {
					resetTutorData()
					setHasTutor(false)
				}
			} else {
				resetTutorData()
			}
		} catch (error) {
			console.error(
				"Błąd podczas pobierania danych zalogowanego tutora:",
				error
			)
		}
	}

	useEffect(() => {
		fetchLoggedInTutorData()
	}, [user])

	const resetTutorData = () => {
		setTutorData({
			level: [],
			mode: [],
			city: "",
			desc: "",
			price: "",
			subject: "",
			availability: {
				monday: [],
				tuesday: [],
				wednesday: [],
				thursday: [],
				friday: [],
				saturday: [],
				sunday: [],
			},
		})
	}

	const handleEdit = () => {
		setIsEditable(true)
		setIsAvailabilityEditable(true)
	}

	const handleChange = (field, value) => {
		console.log("handleChange:", field, value) // Dodaj tę linię
		if (field === "price") {
			// Usuwamy wszystkie znaki oprócz cyfr i kropki
			const filteredValue = value.replace(/[^0-9.]/g, "")
			setTutorData({ ...tutorData, [field]: filteredValue })
		} else {
			setTutorData({ ...tutorData, [field]: value })
		}
	}

	const addLevel = () => {
		if (newLevel) {
			if (tutorData && tutorData.level.includes(newLevel)) {
				setLevelError("Ten poziom już istnieje.")
			} else {
				setTutorData(prevData => ({
					...prevData,
					level: [...prevData.level, newLevel],
				}))
				setNewLevel("")
				setLevelError("")
				setIsLevelRemovable(true)
			}
		}
	}

	const addMode = () => {
		if (newMode) {
			if (tutorData && tutorData.mode.includes(newMode)) {
				setModeError("Ten tryb już istnieje.")
			} else {
				setTutorData(prevData => ({
					...prevData,
					mode: [...prevData.mode, newMode],
				}))
				setNewMode("")
				setModeError("")
				setIsModeRemovable(true)
			}
		}
	}

	const removeLevel = levelToRemove => {
		if (tutorData?.level?.length > 1) {
			setTutorData(prevData => ({
				...prevData,
				level: prevData.level.filter(level => level !== levelToRemove),
			}))
		}
		// Używamy opcjonalnego łańcuchowania wewnątrz setState
		setIsLevelRemovable(prevData => prevData?.level?.length > 2)
	}

	const removeMode = modeToRemove => {
		if (tutorData?.mode?.length > 1) {
			setTutorData(prevData => ({
				...prevData,
				mode: prevData.mode.filter(mode => mode !== modeToRemove),
			}))
		}
		setIsModeRemovable(prevData => prevData?.mode?.length > 2)
	}

	useEffect(() => {
		setIsLevelRemovable(tutorData?.level?.length > 1)
		setIsModeRemovable(tutorData?.mode?.length > 1)
	}, [tutorData])

	const EditAvailability = ({ day, times, onTimeChange }) => {
		return (
			<div>
				<EditDays>{daysMapping[day]}</EditDays> {/* Zmiana tutaj */}
				{times.sort().map((time, index) => (
					<EditChange key={index}>
						{time}
						{isAvailabilityEditable && (
							<EditButton onClick={() => onTimeChange(day, time, "remove")}>
								Usuń
							</EditButton>
						)}
					</EditChange>
				))}
				{isAvailabilityEditable && (
					<EditChange>
						<EditSelect
							value={newTimes[day] || ""}
							onChange={e =>
								setNewTimes({ ...newTimes, [day]: e.target.value })
							}>
							<option value=''>Wybierz godzinę</option>
							{hoursOptions.map(hour => (
								<option key={hour} value={hour}>
									{hour}
								</option>
							))}
						</EditSelect>
						<EditButton onClick={() => onTimeChange(day, newTimes[day], "add")}>
							Dodaj
						</EditButton>
					</EditChange>
				)}
				{timeErrors[day] && <ErrorMsg>{timeErrors[day]}</ErrorMsg>}
			</div>
		)
	}

	const handleTimeChange = (day, time, action) => {
		// Clear the specific day's error first
		setTimeErrors({ ...timeErrors, [day]: "" })

		setTutorData(prevData => {
			let newTimes = [...prevData.availability[day]]
			if (action === "add") {
				if (!time) {
					setTimeErrors(prevErrors => ({
						...prevErrors,
						[day]: "Proszę wybrać godzinę.",
					}))
					return prevData
				}
				if (newTimes.includes(time)) {
					setTimeErrors(prevErrors => ({
						...prevErrors,
						[day]: "Ta godzina już istnieje.",
					}))
					return prevData
				}
				newTimes.push(time)
				newTimes.sort()
			} else if (action === "remove") {
				const index = newTimes.indexOf(time)
				if (index > -1) newTimes.splice(index, 1)
			}
			return {
				...prevData,
				availability: { ...prevData.availability, [day]: newTimes },
			}
		})
		if (action === "add") {
			setNewTimes({ ...newTimes, [day]: "" })
		}
	}

	useEffect(() => {
		console.log("Aktualna dostępność:", tutorData.availability)
	}, [tutorData.availability])

	const updateTutor = async () => {
		console.log("Przed wysłaniem:", tutorData)
		try {
			let tutorDataToSend = {
				userId: user.id,

				desc: tutorData.desc,
				price: tutorData.price,
				subject: tutorData.subject,
				level: tutorData.level,
				mode: tutorData.mode,
				city: tutorData.city,
				availability: tutorData.availability,
			}

			if (!hasTutor) {
				tutorDataToSend = {
					...tutorDataToSend,
					img: "Obraz do uzupełnienia",
				}
			}

			let response
			if (hasTutor) {
				console.log("Wysyłanie PUT z danymi:", tutorDataToSend)
				response = await axios.put(
					`http://localhost:8080/tutors/${tutorData.id}`,
					tutorDataToSend,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
			} else {
				console.log("Wysyłanie POST z danymi:", tutorDataToSend)
				response = await axios.post(
					"http://localhost:8080/tutors",
					tutorDataToSend,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
			}

			if (response.status === 200) {
				fetchLoggedInTutorData()
				setTutorData(response.data)
				setNewTimes(initialTimeState)
				setTimeErrors(initialErrorState)
				console.log("Dane tutora zostały zaktualizowane/dodane pomyślnie")
				setIsEditable(false)
				setIsAvailabilityEditable(false)
				setLevelError("")
				setModeError("")
			}
			setIsEditable(false)
			setLevelError("")
			setModeError("")

			console.log("Dane tutora zostały zaktualizowane/dodane pomyślnie")
		} catch (error) {
			console.error("Błąd podczas aktualizacji/dodawania danych tutora:", error)
			if (error.response) {
				console.log("Odpowiedź serwera:", error.response.data)
			}
		}
	}

	if (!tutorData) {
		return <div>Loading...</div>
	}

	return (
		<EditLessonContainer>
			<Title>Dane lekcji</Title>
			<EditLessonBox>
				<EditDataInfoBox>
					<EditLabel>Przedmiot</EditLabel>
					<EditChangeBox>
						<EditSelectLast
							value={tutorData.subject}
							onChange={e => handleChange("subject", e.target.value)}
							disabled={!isEditable}>
							<option value=''>Wybierz przedmiot</option>
							{baseSelectOptions.subject.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</EditSelectLast>
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Poziom</EditLabel>
					<EditChangeBox>
						{tutorData?.level?.map((level, index) => (
							<EditChange key={index}>
								{level}
								{isEditable && isLevelRemovable && (
									<EditButton onClick={() => removeLevel(level)}>
										Usuń
									</EditButton>
								)}
							</EditChange>
						))}
						{isEditable && (
							<EditChange>
								<EditSelect
									value={newLevel}
									onChange={e => setNewLevel(e.target.value)}>
									<option value=''>Wybierz poziom</option>
									{baseSelectOptions.level.map(option => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</EditSelect>
								<EditButton onClick={addLevel}>Dodaj</EditButton>
							</EditChange>
						)}
						{levelError && <ErrorMsg>{levelError}</ErrorMsg>}
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Tryb</EditLabel>
					<EditChangeBox>
						{tutorData?.mode?.map((mode, index) => (
							<EditChange key={index}>
								{mode}
								{isEditable && isModeRemovable && (
									<EditButton onClick={() => removeMode(mode)}>Usuń</EditButton>
								)}
							</EditChange>
						))}
						{isEditable && (
							<EditChange>
								<EditSelect
									value={newMode}
									onChange={e => setNewMode(e.target.value)}>
									<option value=''>Wybierz tryb</option>
									{baseSelectOptions.mode.map(option => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</EditSelect>

								<EditButton onClick={addMode}>Dodaj</EditButton>
							</EditChange>
						)}
						{modeError && <ErrorMsg>{modeError}</ErrorMsg>}
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Miasto</EditLabel>
					<EditChangeBox>
						<EditSelectLast
							value={tutorData.city}
							onChange={e => {
								console.log("EditSelectLast value:", e.target.value) // Dodaj tę linię
								handleChange("city", e.target.value)
							}}
							disabled={!isEditable}>
							<option value=''>Wybierz miasto</option>
							{baseSelectOptions.city.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</EditSelectLast>
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Opis</EditLabel>
					<EditChangeBox>
						<EditTextarea
							value={tutorData.desc}
							onChange={e => handleChange("desc", e.target.value)}
							disabled={!isEditable}></EditTextarea>
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Cena</EditLabel>
					<EditChangeBox>
						<EditTextarea
							value={tutorData.price}
							onChange={e => handleChange("price", e.target.value)}
							disabled={!isEditable}></EditTextarea>
					</EditChangeBox>
				</EditDataInfoBox>

				<EditDataInfoBox>
					<EditLabel>Dostępność</EditLabel>
					<EditChangeBox>
						{tutorData.availability &&
							Object.entries(tutorData.availability).map(([day, times]) => (
								<EditAvailability
									key={day}
									day={day}
									times={times}
									onTimeChange={handleTimeChange}
								/>
							))}
					</EditChangeBox>
				</EditDataInfoBox>

				{isEditable ? (
					<EditButtonDown onClick={updateTutor}>Zapisz</EditButtonDown>
				) : (
					<EditButtonDown onClick={handleEdit}>Edytuj</EditButtonDown>
				)}
			</EditLessonBox>
		</EditLessonContainer>
	)
}

export default EditLesson
