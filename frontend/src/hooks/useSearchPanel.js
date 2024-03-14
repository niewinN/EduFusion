import { useState } from "react"
import { useSelectedOptions } from "../Context/SelectedOptionsContext"
import { useNavigate } from "react-router-dom"

export const useSearchPanel = () => {
	const [startDate, setStartDate] = useState(null)
	const [tutoringMode, setTutoringMode] = useState("")
	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
	const [modalOpen, setModalOpen] = useState(false)
	const navigate = useNavigate()

	const handleChange = (name, value) => {
		console.log("handleChange - name:", name, "value:", value)
		const newValue = value instanceof Date ? value : value.target.value
		if (name === "mode" && newValue.toLowerCase() === "zdalnie") {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				city: "",
				[name]: newValue.toLowerCase(),
			}))
		} else {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				[name]: newValue,
			}))
		}

		if (name === "mode") {
			setTutoringMode(newValue.toLowerCase())
			console.log("Tutoring Mode set to:", newValue)
		}
	}

	const handleDateChange = date => {
		setStartDate(date)
		handleChange("date", date)
	}

	const isFormValid = () => {
		const { subject, level, mode, city, date } = selectedOptions
		return subject && level && mode && date && (mode !== "stacjonarnie" || city)
	}

	const handleSearch = () => {
		if (isFormValid()) {
			navigate("/tutors")
		} else {
			setModalOpen(true)
		}
	}

	return {
		startDate,
		setStartDate,
		tutoringMode,
		selectedOptions,
		setSelectedOptions,
		modalOpen,
		setModalOpen,
		handleChange,
		handleDateChange,
		isFormValid,
		handleSearch,
	}
}
