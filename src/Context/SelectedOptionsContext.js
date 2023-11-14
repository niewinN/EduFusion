import React, { createContext, useContext, useState } from 'react'

export const SelectedOptionsContext = createContext()

export const useSelectedOptions = () => useContext(SelectedOptionsContext)

export const SelectedOptionsProvider = ({ children }) => {
	const [selectedOptions, setSelectedOptions] = useState({
		subject: '',
		level: '',
		mode: '',
		city: '',
		date: new Date(),
	})

	return (
		<SelectedOptionsContext.Provider
			value={{ selectedOptions, setSelectedOptions }}>
			{children}
		</SelectedOptionsContext.Provider>
	)
}
