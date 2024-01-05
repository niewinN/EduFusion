import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

export const SelectedOptionsContext = createContext()

export const useSelectedOptions = () => useContext(SelectedOptionsContext)

export const SelectedOptionsProvider = ({ children }) => {
	const [selectedOptions, setSelectedOptions] = useState({
		subject: '',
		level: '',
		mode: '',
		city: '',
		date: new Date(),
		tutorName: '',
		studentName: '',
		// selectedDate: new Date(),
		startTime: '',
		tutorEmail: '',
		studentEmail: '',
		// startTime: '',
	})
	const [lessons, setLessons] = useState([])

	// const addLesson = async lessonData => {
	// 	const currentUser = JSON.parse(localStorage.getItem('user'))
	// 	const updatedLessonData = {
	// 		...lessonData,
	// 		studentEmail: currentUser.email,
	// 	}

	// try {
	// 	await axios.post('http://localhost:4002/lessons', updatedLessonData)
	// 	const response = await axios.get('http://localhost:4002/lessons')
	// 	setLessons(response.data)
	// } catch (error) {
	// 	console.error('Błąd podczas dodawania lekcji:', error)
	// }
	// }

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
