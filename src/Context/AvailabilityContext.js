// import React, { useState, createContext } from 'react'

// export const AvailabilityContext = createContext()

// // export const defaultAvailability = {
// // 	monday: ['15:30', '16:00', '16:30', '15:30', '16:00', '16:30'],
// // 	tuesday: ['17:30', '18:00'],
// // 	wednesday: ['12:00', '12:30'],
// // 	thursday: ['14:30', '15:00'],
// // 	friday: ['10:00', '11:00'],
// // 	saturday: ['12:00', '12:30'],
// // 	sunday: ['15:30', '16:00', '16:30', '15:30', '16:00', '16:30'],
// // }

// export const AvailabilityProvider = ({ children }) => {
// 	const [selectedDate, setSelectedDate] = useState(new Date())

// 	const value = {
// 		selectedDate,
// 		setSelectedDate,
// 	}

// 	return (
// 		<AvailabilityContext.Provider value={value}>
// 			{children}
// 		</AvailabilityContext.Provider>
// 	)
// }
