import React from 'react'
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
	const { lessons } = useSelectedOptions()
	console.log('Lekcje w kontekście:', lessons)
	return (
		<LessonsContainer>
			<Title>Moje lekcje</Title>
			<LessonsBtnBox>
				<LessonsBtn>Wszystkie</LessonsBtn>
				<LessonsBtn>Nadchodzące</LessonsBtn>
				<LessonsBtn>Zakończone</LessonsBtn>
			</LessonsBtnBox>
			<LessonsBox>
				{lessons.map((lessonData, index) => (
					<LessonCard key={index} lessonData={lessonData} />
				))}
				{/* <LessonCard />
				<LessonCard />
				<LessonCard /> */}
			</LessonsBox>
		</LessonsContainer>
	)
}

export default Lessons
