import React, { createContext, useState, useContext, useEffect } from 'react'
import { useSelectedOptions } from './SelectedOptionsContext'
import { useNavigate } from 'react-router-dom'

const LoginContext = createContext()

export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	// const [user, setUser] = useState(null)
	const [user, setUser] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		role: '',
	})

	// const [userName, setUserName] = useState('')
	const { setLessons } = useSelectedOptions()
	const navigate = useNavigate()

	useEffect(() => {
		const checkAuth = () => {
			const expiry = localStorage.getItem('expiry')
			if (!expiry) return false
			return new Date() < new Date(expiry)
		}

		if (checkAuth()) {
			const storedUser = JSON.parse(localStorage.getItem('user'))
			console.log('Znaleziono zalogowanego użytkownika:', storedUser)
			if (storedUser) {
				console.log('Znaleziono zalogowanego użytkownika:', storedUser)
				setUser(storedUser)
				setIsLoggedIn(true)
				// ... pozostała część logiki

				// setUserName(user.firstName)

				// Ładowanie lekcji użytkownika
				const userLessons =
					JSON.parse(localStorage.getItem(`lessons_${storedUser.email}`)) || []

				setLessons(
					userLessons.map(lesson => ({
						...lesson,
						selectedDate: new Date(lesson.selectedDate),
					}))
				)
			}
		}
	}, [setLessons])

	const onLoginSuccess = userData => {
		const now = new Date()
		const expiryTime = new Date(now.getTime() + 3600000) // Dodaj 1 godzinę

		localStorage.setItem('user', JSON.stringify(userData))
		setUser(userData)
		setIsLoggedIn(true)
		localStorage.setItem('expiry', expiryTime.toISOString())

		const userLessons =
			JSON.parse(localStorage.getItem(`lessons_${userData.email}`)) || []
		setLessons(userLessons)
		// setUser(userData)
		// setIsLoggedIn(true)
		// setUserName(user.firstName)
	}

	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('expiry')
		setIsLoggedIn(false)
		// setUserName('')
		setUser({ email: '', firstName: '', lastName: '', phoneNumber: '' }) // Resetuj stan user
		navigate('/')
	}

	return (
		<LoginContext.Provider value={{ isLoggedIn, onLoginSuccess, logout, user }}>
			{children}
		</LoginContext.Provider>
	)
}
