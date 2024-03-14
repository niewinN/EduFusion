import React, { createContext, useContext, useState } from "react"
import axios from "axios"

export const SelectedOptionsContext = createContext()

export const useSelectedOptions = () => useContext(SelectedOptionsContext)

export const SelectedOptionsProvider = ({ children }) => {
	const [selectedOptions, setSelectedOptions] = useState({
		subject: "",
		level: "",
		mode: "",
		city: "",
		date: new Date(),
		tutorName: "",
		studentName: "",
		// selectedDate: new Date(),
		startTime: "",
		tutorEmail: "",
		studentEmail: "",
		// startTime: '',
	})
	const [lessons, setLessons] = useState([])

	return (
		<SelectedOptionsContext.Provider
			value={{
				selectedOptions,
				setSelectedOptions,
				lessons,
				setLessons,
				// addLesson,
			}}>
			{children}
		</SelectedOptionsContext.Provider>
	)
}
