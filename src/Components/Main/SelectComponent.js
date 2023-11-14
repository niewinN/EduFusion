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
}) {
	const Select = styleType === 'filter' ? FilterSelect : SearchSelect

	const handleChange = event => {
		onChange(event.target.value)
	}
	return (
		// <div>
		<Select onChange={onChange} value={selectedValue}>
			{/* <SearchOption value=''>{label}</SearchOption> */}
			{options.map((option, index) => (
				<SearchOption key={index} value={option.value}>
					{option.label}
				</SearchOption>
			))}
		</Select>
		// </div>
	)
}

export default SelectComponent
