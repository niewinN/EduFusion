import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

function EditData() {
	const { logout, user } = useLogin()
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
	})
	const [isEditable, setIsEditable] = useState({
		firstName: false,
		lastName: false,
		phoneNumber: false,
	})

	useEffect(() => {
		if (user) {
			setFormData({
				email: user.email || '',
				firstName: user.firstName || '',
				lastName: user.lastName || '',
				phoneNumber: user.phoneNumber || '',
			})
		}
	}, [user])

	const handleEdit = field => {
		setIsEditable({ ...isEditable, [field]: true })
	}

	const handleChange = (field, value) => {
		setFormData({ ...formData, [field]: value })
	}

	const updateUser = async updatedUser => {
		try {
			const response = await axios.put(
				`http://localhost:8080/users/${updatedUser.id}`,
				updatedUser
			)
			console.log('Dane zaktualizowane:', response.data)
		} catch (error) {
			console.error('Błąd podczas aktualizacji użytkownika:', error)
		}
	}

	const handleSave = field => {
		console.log(`Zapisano: ${field} = ${formData[field]}`)
		setIsEditable({ ...isEditable, [field]: false })

		const updatedUser = { ...user, ...formData }
		updateUser(updatedUser)
	}

	if (!user) {
		return null
	}

	const renderEditBox = (field, label) => (
		<EditBox key={field}>
			<EditDataInfo>
				<EditLabel>{label}</EditLabel>
				<EditInput
					disabled={!isEditable[field]}
					value={formData[field]}
					onChange={e => handleChange(field, e.target.value)}
				/>
			</EditDataInfo>
			{isEditable[field] ? (
				<EditBtn onClick={() => handleSave(field)}>Zapisz</EditBtn>
			) : (
				<EditBtn onClick={() => handleEdit(field)}>Edytuj</EditBtn>
			)}
		</EditBox>
	)

	return (
		<EditDataContainer>
			<Title>Moje dane</Title>
			<EditBox>
				<EditDataInfo>
					<EditLabel>E-mail</EditLabel>
					<EditInput
						disabled={true}
						value={formData.email}
						onChange={e => handleChange('email', e.target.value)}
					/>
				</EditDataInfo>
			</EditBox>
			{renderEditBox('firstName', 'Imię')}
			{renderEditBox('lastName', 'Nazwisko')}
			{renderEditBox('phoneNumber', 'Numer telefonu')}
			<LogoutBtnBox>
				<LogoutBtn onClick={logout}>Wyloguj</LogoutBtn>
			</LogoutBtnBox>
		</EditDataContainer>
	)
}

export default EditData
