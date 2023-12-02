import React, { useState, useEffect } from 'react'
import LessonCard from './LessonCard/LessonCard'
import {
	LessonsContainer,
	LessonsBox,
	LessonsBtn,
	LessonsBtnBox,
	Title,
} from '../../../Assets/Styles/UserProfile/Lessons.styles'
import { useSelectedOptions } from '../../../Context/SelectedOptionsContext'
import { useLogin } from '../../../Context/LoginContext'

function Lessons() {
	const [selectedFilter, setSelectedFilter] = useState('All')
	const { user } = useLogin()
	console.log('Zalogowany użytkownik w Lessons:', user) // Załóżmy, że useLogin to hook dostarczający informacje o zalogowanym użytkowniku.

	const { lessons, setLessons } = useSelectedOptions()

	useEffect(() => {
		const lessonsKey =
			user.role === 'tutor'
				? `lessons_${user.email}`
				: `student_lessons_${user.email}`
		const storedLessons = JSON.parse(localStorage.getItem(lessonsKey)) || []
		setLessons(storedLessons)
	}, [user, setLessons])

	console.log('Lekcje z kontekstu w Lessons:', lessons)
	// const filterLessons = () => {
	// 	const now = new Date()
	// 	switch (selectedFilter) {
	// 		case 'Upcoming':
	// 			return lessons.filter(lesson => new Date(lesson.selectedDate) > now)
	// 		case 'Completed':
	// 			return lessons.filter(lesson => new Date(lesson.selectedDate) <= now)
	// 		default:
	// 			return lessons
	// 	}
	// }
	const filterLessons = () => {
		const now = new Date()
		let filteredLessons = lessons

		// Filtruj na podstawie roli użytkownika
		if (user.role === 'tutor') {
			filteredLessons = lessons.filter(
				lesson => lesson.tutorEmail === user.email
			)
		} else if (user.role === 'student') {
			filteredLessons = lessons.filter(
				lesson => lesson.studentEmail === user.email
			)
		}

		// Filtruj na podstawie wybranego filtra
		switch (selectedFilter) {
			case 'Upcoming':
				return filteredLessons.filter(
					lesson => new Date(lesson.selectedDate) > now
				)
			case 'Completed':
				return filteredLessons.filter(
					lesson => new Date(lesson.selectedDate) <= now
				)
			default:
				console.log('Filtrowane lekcje:', filteredLessons)
				return filteredLessons
		}
	}
	// const filterLessons = () => {
	// 	const now = new Date()
	// 	let filteredLessons = lessons

	// 	return filteredLessons.filter(lesson => {
	// 		const lessonDate = new Date(lesson.selectedDate)
	// 		console.log(
	// 			'Próba formatowania daty:',
	// 			lesson.selectedDate,
	// 			'->',
	// 			lessonDate
	// 		)

	// 		if (isNaN(lessonDate.getTime())) {
	// 			console.warn('Nieprawidłowa data:', lesson.selectedDate)
	// 			return false
	// 		}

	// 		switch (selectedFilter) {
	// 			case 'Upcoming':
	// 				return lessonDate > now
	// 			case 'Completed':
	// 				return lessonDate <= now
	// 			default:
	// 				return true
	// 		}
	// 	})
	// }

	const handleFilterChange = filter => {
		console.log('Zmiana filtra na:', filter)
		setSelectedFilter(filter)
	}

	return (
		<LessonsContainer>
			<Title>Moje lekcje</Title>
			<LessonsBtnBox>
				<LessonsBtn
					onClick={() => handleFilterChange('All')}
					isActive={selectedFilter === 'All'}>
					Wszystkie
				</LessonsBtn>
				<LessonsBtn
					onClick={() => handleFilterChange('Upcoming')}
					isActive={selectedFilter === 'Upcoming'}>
					Nadchodzące
				</LessonsBtn>
				<LessonsBtn
					onClick={() => handleFilterChange('Completed')}
					isActive={selectedFilter === 'Completed'}>
					Zakończone
				</LessonsBtn>
			</LessonsBtnBox>
			<LessonsBox>
				{filterLessons().map((lessonData, index) => (
					<LessonCard key={index} lessonData={lessonData} loggedInUser={user} />
				))}
			</LessonsBox>
		</LessonsContainer>
	)
}

export default Lessons
