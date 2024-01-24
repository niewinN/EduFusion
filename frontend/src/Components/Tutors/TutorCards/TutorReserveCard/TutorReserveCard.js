import React, { useState, useEffect } from 'react'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import {
	CardBox,
	CardPhotoBox,
	CardPrice,
	CardPriceAndBtn,
	CardReserveBtn,
	InfoBtn,
	InfoText,
	TutorDesc,
	TutorName,
	TutorSubject,
	CardRight,
	CardRightTitle,
} from '../../../../Assets/Styles/Tutors/TutorReserveCard.styles'
import ScheduleCalendar from './ScheduleCalendar'
import axios from 'axios'
import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'
import CustomModal from '../../../../Layouts/UI/CustomModal'
import { useNavigate } from 'react-router-dom'
import successImg from '../../../../Assets/Images/UI/successImg.png'
import filtersModalImg from '../../../../Assets/Images/UI/filterImg.png'
import { useLogin } from '../../../../Context/LoginContext'

function TutorReserveCard({
	img,
	name,
	desc,
	subject,
	price,
	email,
	selectedTutorId,
}) {
	const [selectedTutor, setSelectedTutor] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [lessonReserved, setLessonReserved] = useState(false)
	const [modalTitle, setModalTitle] = useState('')
	const [modalText, setModalText] = useState('')
	const [selectedLessonDate, setSelectedLessonDate] = useState(null) // Nowy stan
	const { selectedOptions, addLesson } = useSelectedOptions()
	const selectedDate = selectedOptions.date
	const navigate = useNavigate()
	const { isLoggedIn, user } = useLogin()

	const token = localStorage.getItem('token')
	const isTutor = user.role === 'TUTOR'

	const areAllCriteriaMet = () => {
		const { subject, level, mode, city, date } = selectedOptions
		const isStationary = mode === 'stacjonarnie' // Zakładając, że 'stacjonarnie' to jeden z trybów
		return subject && level && mode && date && (!isStationary || city)
	}

	const handleAddLesson = async () => {
		if (!isLoggedIn) {
			navigate('/login')
			return
		}

		if (!areAllCriteriaMet()) {
			setModalTitle('Uzupełnij kryteria!')
			setModalText(
				'Musisz uzupełnić wszystkie potrzebne kryteria, aby móc wyszukać odpowiedniego korepetytora!'
			)
			setModalOpen(true)
			return
		}

		try {
			// const currentUser = JSON.parse(localStorage.getItem('user'))

			const tutorResponse = await axios.get(
				`http://localhost:8080/tutors/${selectedTutorId}`,
				{
					headers: {
						Authorization: `Bearer ${token}`, // Dodaj token dostępu w nagłówku
					},
				}
			)
			const selectedTutor = tutorResponse.data

			const lessonData = {
				subject: selectedOptions.subject,
				level: selectedOptions.level,
				mode: selectedOptions.mode,
				city: selectedOptions.city,
				lessonDate: selectedLessonDate,
				tutorId: selectedTutorId, // Dodajemy tutorId
				studentId: user.id,
				tutorName: name,
				tutorEmail: email,
				studentName: `${user.firstName} ${user.lastName}`,
				studentEmail: user.email,
				startTime: selectedOptions.startTime,
			}

			console.log(`Dane ktore chce przeslac: `, lessonData)

			// Post the lesson data to the backend
			axios.post('http://localhost:8080/lessons', JSON.stringify(lessonData), {
				headers: {
					Authorization: `Bearer ${token}`, // jeśli wymagana jest autoryzacja
					'Content-Type': 'application/json',
				},
			})

			console.log(lessonData)

			setModalOpen(true)
			setLessonReserved(true)
			setModalTitle('Pomyślnie zarezerwowano lekcję!')
			setModalText(
				'Twój korepetytor skontaktuje się z Tobą najszybciej, jak tylko będzie mógł, w celu omówienia szczegółów zajęć.'
			)
		} catch (error) {
			console.error('Błąd podczas rezerwacji lekcji:', error)
		}
	}

	const handleModalClose = () => {
		setModalOpen(false)
		if (lessonReserved) {
			navigate('/user')
			setLessonReserved(false) // Reset flagi po przekierowaniu
		}
	}

	useEffect(() => {
		const fetchTutorData = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/tutors`)
				setSelectedTutor(
					response.data.find(tutor => tutor.id === selectedTutorId)
				)
			} catch (error) {
				console.error('Błąd podczas pobierania danych nauczyciela:', error)
			}
		}

		fetchTutorData()
	}, [selectedTutorId])

	return (
		<>
			<CardBox>
				<CardPhotoBox img={img}>
					<InfoBtn icon={faCircleQuestion}></InfoBtn>
					<InfoText>
						<TutorName>{name}</TutorName>
						<TutorDesc>{desc}</TutorDesc>
						<TutorSubject>{subject}</TutorSubject>
					</InfoText>
				</CardPhotoBox>
				<CardRight>
					<CardRightTitle>
						Kliknij w wolny termin i zarezerwuj zajęcia!
					</CardRightTitle>
					<ScheduleCalendar
						selectedTutor={selectedTutor}
						selectedDate={selectedDate || new Date()}
						setSelectedLessonDate={setSelectedLessonDate}
					/>

					<CardPriceAndBtn>
						<CardPrice>{price}zł / 60 min</CardPrice>
						<CardReserveBtn onClick={handleAddLesson} disabled={isTutor}>
							Zarezerwuj
						</CardReserveBtn>
					</CardPriceAndBtn>
				</CardRight>
			</CardBox>
			<CustomModal
				isOpen={modalOpen}
				onClose={handleModalClose}
				title={modalTitle}
				text={modalText}
				imageSrc={
					modalTitle === 'Pomyślnie zarezerwowano lekcję!'
						? successImg
						: filtersModalImg
				}
			/>
		</>
	)
}

export default TutorReserveCard
