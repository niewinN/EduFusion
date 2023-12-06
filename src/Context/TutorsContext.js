// // TutorsContext.js
// import React, { createContext, useState, useEffect } from 'react'
// import axios from 'axios'

// export const TutorsContext = createContext()

// export const TutorsProvider = ({ children }) => {
// 	const [tutors, setTutors] = useState([])

// 	useEffect(() => {
// 		axios
// 			.get(`http://localhost:4001/tutors`)
// 			.then(response => {
// 				setTutors(response.data)
// 			})
// 			.catch(error => {
// 				console.error('Błąd podczas pobierania danych:', error)
// 			})
// 	}, [])

// 	return (
// 		<TutorsContext.Provider value={tutors}>{children}</TutorsContext.Provider>
// 	)
// }
