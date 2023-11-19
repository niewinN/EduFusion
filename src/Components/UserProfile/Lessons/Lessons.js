import React, { useState } from 'react'
import LessonCard from './LessonCard/LessonCard'
import {
	LessonsContainer,
	LessonsBox,
	LessonsBtn,
	LessonsBtnBox,
	Title,
} from '../../../Assets/Styles/UserProfile/Lessons.styles'
import { useSelectedOptions } from '../../../Context/SelectedOptionsContext'

function Lessons() {
	const [selectedFilter, setSelectedFilter] = useState('All')

	const { lessons } = useSelectedOptions()
	console.log('Lekcje w kontekście:', lessons)
	const filterLessons = () => {
		const now = new Date()
		switch (selectedFilter) {
			case 'Upcoming':
				return lessons.filter(lesson => new Date(lesson.selectedDate) > now)
			case 'Completed':
				return lessons.filter(lesson => new Date(lesson.selectedDate) <= now)
			default:
				return lessons
		}
	}

	const handleFilterChange = filter => {
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
					<LessonCard key={index} lessonData={lessonData} />
				))}
			</LessonsBox>
		</LessonsContainer>
	)
}

export default Lessons
