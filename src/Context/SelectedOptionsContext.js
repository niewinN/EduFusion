// SelectedOptionsContext.js
import React, { createContext, useState } from 'react'

export const SelectedOptionsContext = createContext()

export const SelectedOptionsProvider = ({ children }) => {
	const [selectedOptions, setSelectedOptions] = useState({
		subject: '',
		level: '',
		mode: '',
		city: '',
		date: null,
	})

	return (
		<SelectedOptionsContext.Provider
			value={{ selectedOptions, setSelectedOptions }}>
			{children}
		</SelectedOptionsContext.Provider>
	)
}
