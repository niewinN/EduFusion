import React, { createContext, useState, useContext, useEffect } from 'react'
import { useSelectedOptions } from './SelectedOptionsContext'
import { useNavigate } from 'react-router-dom'

const LoginContext = createContext()

export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUserName] = useState('')
	const { setLessons } = useSelectedOptions()
	const navigate = useNavigate()

	useEffect(() => {
		const checkAuth = () => {
			const expiry = localStorage.getItem('expiry')
			if (!expiry) return false
			const now = new Date()
			return now < new Date(expiry)
		}

		if (checkAuth()) {
			const user = JSON.parse(localStorage.getItem('user'))
			console.log('Znaleziono zalogowanego użytkownika:', user)
			setIsLoggedIn(true)
			setUserName(user.firstName)

			// Ładowanie lekcji użytkownika
			const userLessons =
				JSON.parse(localStorage.getItem(`lessons_${user.email}`)) || []
			const convertedLessons = userLessons.map(lesson => ({
				...lesson,
				selectedDate: new Date(lesson.selectedDate),
			}))
			setLessons(convertedLessons)
			// Upewnij się, że ta funkcja istnieje w Twoim kontekście i jest poprawnie zaimplementowana
		}
	}, [setLessons])

	const onLoginSuccess = user => {
		const now = new Date()
		const expiryTime = new Date(now.getTime() + 3600000) // Dodaj 1 godzinę

		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('expiry', expiryTime.toISOString())

		const userLessons =
			JSON.parse(localStorage.getItem(`lessons_${user.email}`)) || []
		setLessons(userLessons)
		setIsLoggedIn(true)
		setUserName(user.firstName)
	}

	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('expiry')
		setIsLoggedIn(false)
		setUserName('')
		navigate('/')
	}

	return (
		<LoginContext.Provider
			value={{ isLoggedIn, userName, onLoginSuccess, logout }}>
			{children}
		</LoginContext.Provider>
	)
}
