import React from 'react'
import LessonCard from './LessonCard/LessonCard'
import {
	LessonsContainer,
	LessonsBox,
	LessonsBtn,
	LessonsBtnBox,
	Title,
} from '../../../Assets/Styles/UserProfile/Lessons.styles'

function Lessons() {
	return (
		<LessonsContainer>
			<Title>Moje lekcje</Title>
			<LessonsBtnBox>
				<LessonsBtn>Wszystkie</LessonsBtn>
				<LessonsBtn>Nadchodzące</LessonsBtn>
				<LessonsBtn>Zakończone</LessonsBtn>
			</LessonsBtnBox>
			<LessonsBox>
				<LessonCard />
				<LessonCard />
				<LessonCard />
			</LessonsBox>
		</LessonsContainer>
	)
}

export default Lessons
