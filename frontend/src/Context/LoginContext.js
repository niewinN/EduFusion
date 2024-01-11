import React, { createContext, useState, useContext, useEffect } from 'react'
import { useSelectedOptions } from './SelectedOptionsContext'
import { useNavigate } from 'react-router-dom'
// import jwtDecode from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'

const LoginContext = createContext()

export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	// const [user, setUser] = useState(null)
	const [user, setUser] = useState({
		id: '',
		email: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		role: '',
	})

	// const [userName, setUserName] = useState('')
	const { setLessons } = useSelectedOptions()
	const navigate = useNavigate()

	const isTokenValid = token => {
		try {
			const decodedToken = jwtDecode(token)
			const currentTime = Date.now() / 1000
			return decodedToken.exp > currentTime
		} catch (error) {
			console.error('Error decoding token:', error)
			return false
		}
		// console.log('Token to be decoded:', token)
		// const decodedToken = jwtDecode(token)
		// const currentTime = Date.now() / 1000 // Zaktualizowany czas w sekundach
		// return decodedToken.exp > currentTime
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		console.log('Token from localStorage:', token) // Wyświetl token
		if (token) {
			if (isTokenValid(token)) {
				setIsLoggedIn(true)
				const decodedToken = jwtDecode(token)
				setUser({
					id: decodedToken.userId,
					email: decodedToken.email,
					firstName: decodedToken.firstName,
					lastName: decodedToken.lastName,
					phoneNumber: decodedToken.phoneNumber,
					role: decodedToken.role,
					// inne potrzebne pola
				})
			} else {
				localStorage.removeItem('token') // Usuń nieważny token
				setIsLoggedIn(false)
			}
		}
	}, [])

	// useEffect(() => {
	// 	const checkAuth = () => {
	// 		const expiry = localStorage.getItem('expiry')
	// 		if (!expiry) return false
	// 		return new Date() < new Date(expiry)
	// 	}

	// 	if (checkAuth()) {
	// 		const storedUser = JSON.parse(localStorage.getItem('user'))
	// 		console.log('Znaleziono zalogowanego użytkownika:', storedUser)
	// 		if (storedUser) {
	// 			console.log('Znaleziono zalogowanego użytkownika:', storedUser)
	// 			setUser(storedUser)
	// 			setIsLoggedIn(true)
	// 			// ... pozostała część logiki

	// 			// setUserName(user.firstName)

	// 			// Ładowanie lekcji użytkownika
	// 			const userLessons =
	// 				JSON.parse(localStorage.getItem(`lessons_${storedUser.email}`)) || []

	// 			setLessons(
	// 				userLessons.map(lesson => ({
	// 					...lesson,
	// 					selectedDate: new Date(lesson.selectedDate),
	// 				}))
	// 			)
	// 		}
	// 	}
	// }, [setLessons])

	const onLoginSuccess = token => {
		localStorage.setItem('token', token)
		setIsLoggedIn(true)
		console.log('Logged in successfully with token:', token)
		const decodedToken = jwtDecode(token)
		console.log('Decoded token:', decodedToken)
		// Pobierz dane użytkownika z dekodowanego tokenu
		const user = {
			id: decodedToken.userId,
			email: decodedToken.email,
			firstName: decodedToken.firstName,
			lastName: decodedToken.lastName,
			phoneNumber: decodedToken.phoneNumber,
			role: decodedToken.role,
		}
		console.log('User data:', user)
		localStorage.setItem('token', token)
		setIsLoggedIn(true)
		setUser(user)
	}

	// const onLoginSuccess = userData => {
	// 	const now = new Date()
	// 	const expiryTime = new Date(now.getTime() + 3600000) // Dodaj 1 godzinę

	// 	localStorage.setItem('user', JSON.stringify(userData))
	// 	setUser(userData)
	// 	setIsLoggedIn(true)
	// 	localStorage.setItem('expiry', expiryTime.toISOString())

	// 	const userLessons =
	// 		JSON.parse(localStorage.getItem(`lessons_${userData.email}`)) || []
	// 	setLessons(userLessons)
	// 	// setUser(userData)
	// 	// setIsLoggedIn(true)
	// 	// setUserName(user.firstName)
	// }

	const logout = () => {
		// localStorage.removeItem('user')
		// localStorage.removeItem('expiry')
		localStorage.removeItem('token')
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
