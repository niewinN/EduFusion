import React from 'react'
import Lessons from '../Components/UserProfile/Lessons/Lessons'
import EditData from '../Components/UserProfile/EditData'
import { Wrapper } from '../Assets/Styles/GlobalStyles/wrapper'
import {
	UserProfileContainer,
	LessonsFlex,
} from '../Assets/Styles/UserProfile/UserProfile.styles'
import EditLesson from '../Components/TutorProfile/EditLesson'
import { useLogin } from '../Context/LoginContext'
import styled from 'styled-components'

const LessonsSecondFlex = styled.div`
	display: flex;
	flex-direction: column;
`

function TutorProfile() {
	return (
		<>
			<UserProfileContainer>
				<Wrapper>
					<LessonsFlex>
						<Lessons />
						<LessonsSecondFlex>
							<EditData />
							<EditLesson />
						</LessonsSecondFlex>
					</LessonsFlex>
				</Wrapper>
			</UserProfileContainer>
		</>
	)
}

export default TutorProfile
