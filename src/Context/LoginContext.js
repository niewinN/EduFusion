import React, { createContext, useState, useContext } from 'react'

const LoginContext = createContext()

export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUserName] = useState('')

	const onLoginSuccess = user => {
		setIsLoggedIn(true)
		setUserName(user.firstName) // Zakładając, że obiekt user zawiera pole name
	}

	return (
		<LoginContext.Provider value={{ isLoggedIn, userName, onLoginSuccess }}>
			{children}
		</LoginContext.Provider>
	)
}
