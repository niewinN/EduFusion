import React from 'react'
import {
	EditDataContainer,
	EditBox,
	EditInput,
	EditLabel,
	LogoutBtn,
	EditDataInfo,
	EditBtn,
	LogoutBtnBox,
} from '../../Assets/Styles/UserProfile/EditData.styles'
import { Title } from '../../Assets/Styles/UserProfile/Lessons.styles'
import { useLogin } from '../../Context/LoginContext'

function EditData() {
	const { logout } = useLogin()
	return (
		<EditDataContainer>
			<Title>Moje dane</Title>
			<EditBox>
				<EditDataInfo>
					<EditLabel>E-mail</EditLabel>
					<EditInput></EditInput>
				</EditDataInfo>
			</EditBox>
			<EditBox>
				<EditDataInfo>
					<EditLabel>Imię</EditLabel>
					<EditInput></EditInput>
				</EditDataInfo>
				<EditBtn>Edytuj</EditBtn>
			</EditBox>
			<EditBox>
				<EditDataInfo>
					<EditLabel>Nazwisko</EditLabel>
					<EditInput></EditInput>
				</EditDataInfo>
				<EditBtn>Edytuj</EditBtn>
			</EditBox>
			<EditBox>
				<EditDataInfo>
					<EditLabel>Numer telefonu</EditLabel>
					<EditInput></EditInput>
				</EditDataInfo>
				<EditBtn>Edytuj</EditBtn>
			</EditBox>
			<LogoutBtnBox>
				<LogoutBtn onClick={logout}>Wyloguj</LogoutBtn>
			</LogoutBtnBox>
		</EditDataContainer>
	)
}

export default EditData
