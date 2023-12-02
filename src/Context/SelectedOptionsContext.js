// import React, { createContext, useContext, useState } from 'react'

// export const SelectedOptionsContext = createContext()

// export const useSelectedOptions = () => useContext(SelectedOptionsContext)

// export const SelectedOptionsProvider = ({ children }) => {
// 	const [selectedOptions, setSelectedOptions] = useState({
// 		subject: '',
// 		level: '',
// 		mode: '',
// 		city: '',
// 		date: new Date(),
// 		tutorName: '',
// 		studentName: '',
// 		selectedDate: new Date(),
// 		startTime: '',
// 		tutorEmail: '', // Email nauczyciela
// 		studentEmail: '', // Email ucznia
// 	})

// 	const [lessons, setLessons] = useState([])

// 	const addLesson = lessonData => {
// 		// console.log('Dodawanie lekcji:', lessonData)
// 		// setLessons([...lessons, lessonData])
// 		console.log('Dodawanie lekcji:', lessonData)
// 		const currentUser = JSON.parse(localStorage.getItem('user'))
// 		const updatedLessonData = {
// 			...lessonData,
// 			studentEmail: currentUser
// 				? currentUser.email
// 				: 'default_student_email@domain.com',
// 		}
// 		const updatedLessons = [...lessons, updatedLessonData]
// 		setLessons(updatedLessons)
// 		console.log('Zaktualizowane lekcje:', updatedLessons)

// 		// Zapisz zaktualizowane lekcje dla zalogowanego użytkownika
// 		// const currentUser = JSON.parse(localStorage.getItem('user'))
// 		if (currentUser) {
// 			const lessonsKey = `lessons_${currentUser.email}`
// 			localStorage.setItem(lessonsKey, JSON.stringify(updatedLessons))
// 			console.log(`Lekcje zapisane dla ${lessonsKey}:`, updatedLessons)
// 		}
// 	}

// 	return (
// 		<SelectedOptionsContext.Provider
// 			value={{
// 				selectedOptions,
// 				setSelectedOptions,
// 				lessons,
// 				setLessons,
// 				addLesson,
// 			}}>
// 			{children}
// 		</SelectedOptionsContext.Provider>
// 	)
// }
// import React, { createContext, useContext, useState, useEffect } from 'react'

// export const SelectedOptionsContext = createContext()

// export const useSelectedOptions = () => useContext(SelectedOptionsContext)

// export const SelectedOptionsProvider = ({ children }) => {
// 	const [selectedOptions, setSelectedOptions] = useState({
// 		subject: '',
// 		level: '',
// 		mode: '',
// 		city: '',
// 		date: new Date(),
// 		tutorName: '',
// 		studentName: '',
// 		selectedDate: new Date(),
// 		startTime: '',
// 		tutorEmail: '', // Email nauczyciela
// 		studentEmail: '', // Email ucznia
// 	})

// 	const [lessons, setLessons] = useState([])

// 	const addLesson = lessonData => {
// 		console.log('Dodawanie lekcji:', lessonData)
// 		const currentUser = JSON.parse(localStorage.getItem('user'))
// 		const updatedLessonData = {
// 			...lessonData,
// 			studentEmail: currentUser
// 				? currentUser.email
// 				: 'default_student_email@domain.com',
// 		}
// 		const updatedLessons = [...lessons, updatedLessonData]
// 		setLessons(updatedLessons)
// 		console.log('Zaktualizowane lekcje:', updatedLessons)

// 		const lessonsKey = `lessons_${lessonData.tutorEmail}`
// 		localStorage.setItem(lessonsKey, JSON.stringify(updatedLessons))
// 	}

// 	useEffect(() => {
// 		const currentUser = JSON.parse(localStorage.getItem('user'))
// 		if (currentUser && currentUser.role === 'tutor') {
// 			const lessonsKey = `lessons_${currentUser.email}`
// 			const storedLessons = JSON.parse(localStorage.getItem(lessonsKey)) || []
// 			setLessons(storedLessons)
// 		}
// 	}, []) // Dodaj zależności jeśli to konieczne

// 	return (
// 		<SelectedOptionsContext.Provider
// 			value={{
// 				selectedOptions,
// 				setSelectedOptions,
// 				lessons,
// 				setLessons,
// 				addLesson,
// 			}}>
// 			{children}
// 		</SelectedOptionsContext.Provider>
// 	)
// }

import React, { createContext, useContext, useState, useEffect } from 'react'
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
		selectedDate: new Date(),
		startTime: '',
		tutorEmail: '', // Email nauczyciela
		studentEmail: '', // Email ucznia
	})
	const [lessons, setLessons] = useState([])

	const addLesson = async lessonData => {
		// Logika dodawania lekcji dla studenta pozostaje taka sama.
		const currentUser = JSON.parse(localStorage.getItem('user'))
		const updatedLessonData = {
			...lessonData,
			studentEmail: currentUser.email, // zakładamy, że zalogowany użytkownik to student
		}

		try {
			// Wyślij żądanie POST do serwera
			const response = await axios.post(
				'http://localhost:4002/lessons',
				updatedLessonData
			)
			console.log(response.data.message) // Wiadomość zwrotna z serwera

			// Aktualizacja stanu po pomyślnym dodaniu lekcji
			setLessons(prevLessons => [...prevLessons, updatedLessonData])
		} catch (error) {
			console.error('Błąd podczas dodawania lekcji:', error)
		}

		// Dodajemy lekcję do stanu.
		setLessons(prevLessons => {
			const updatedLessons = [...prevLessons, updatedLessonData]
			localStorage.setItem(
				'student_lessons_' + currentUser.email,
				JSON.stringify(updatedLessons)
			)
			return updatedLessons
		})

		// Dodatkowo aktualizujemy lekcje dla nauczyciela.
		const tutorLessonsKey = 'lessons_' + updatedLessonData.tutorEmail
		const tutorLessons = JSON.parse(localStorage.getItem(tutorLessonsKey)) || []
		tutorLessons.push(updatedLessonData)
		localStorage.setItem(tutorLessonsKey, JSON.stringify(tutorLessons))

		// Jeśli jesteś w kontekście nauczyciela, powinieneś również zaktualizować stan.
		if (currentUser.role === 'tutor') {
			setLessons(tutorLessons)
		}
	}

	useEffect(() => {
		const currentUser = JSON.parse(localStorage.getItem('user'))
		if (currentUser) {
			const lessonsKey =
				currentUser.role === 'tutor'
					? `lessons_${currentUser.email}`
					: `student_lessons_${currentUser.email}`
			const storedLessons = JSON.parse(localStorage.getItem(lessonsKey)) || []
			setLessons(storedLessons)
		}
	}, [])

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
