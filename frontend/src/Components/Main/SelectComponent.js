import React from 'react'
import {
	SearchSelect,
	SearchOption,
} from '../../Assets/Styles/Main/SearchPanel.styles'
import { FilterSelect } from '../../Assets/Styles/Tutors/Tile.styles'

function SelectComponent({
	label,
	options,
	selectedValue,
	onChange,
	styleType,
	disabled = false,
}) {
	const Select = styleType === 'filter' ? FilterSelect : SearchSelect

	// const handleChange = event => {
	// 	onChange(event.target.value)
	// }
	return (
		<Select onChange={onChange} value={selectedValue} disabled={disabled}>
			{options.map((option, index) => (
				<SearchOption key={index} value={option.value}>
					{option.label}
				</SearchOption>
			))}
		</Select>
	)
}

export default SelectComponent
