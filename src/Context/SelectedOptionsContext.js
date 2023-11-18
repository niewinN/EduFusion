import React, { createContext, useContext, useState } from 'react'

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
		selectedDate: new Date(),
		startTime: '',
	})

	const [lessons, setLessons] = useState([])

	const addLesson = lessonData => {
		// console.log('Dodawanie lekcji:', lessonData)
		// setLessons([...lessons, lessonData])
		console.log('Dodawanie lekcji:', lessonData)
		const updatedLessons = [...lessons, lessonData]
		setLessons(updatedLessons)

		// Zapisz zaktualizowane lekcje dla zalogowanego użytkownika
		const currentUser = JSON.parse(localStorage.getItem('user'))
		if (currentUser) {
			const lessonsKey = `lessons_${currentUser.email}`
			localStorage.setItem(lessonsKey, JSON.stringify(updatedLessons))
			console.log(`Lekcje zapisane dla ${lessonsKey}:`, updatedLessons)
		}
	}

	return (
		<SelectedOptionsContext.Provider
			value={{
				selectedOptions,
				setSelectedOptions,
				lessons,
				setLessons,
				addLesson,
			}}>
			{children}
		</SelectedOptionsContext.Provider>
	)
}
