import React from 'react'
import Lessons from '../Components/UserProfile/Lessons/Lessons'
import EditData from '../Components/UserProfile/EditData'
import {
	UserProfileContainer,
	LessonsFlex,
} from '../Assets/Styles/UserProfile/UserProfile.styles'
import { Wrapper } from '../Assets/Styles/GlobalStyles/wrapper'

function UserProfile() {
	return (
		<>
			<UserProfileContainer>
				<Wrapper>
					<LessonsFlex>
						<Lessons />
						<EditData flexStart={true} />
					</LessonsFlex>
				</Wrapper>
			</UserProfileContainer>
		</>
	)
}

export default UserProfile
