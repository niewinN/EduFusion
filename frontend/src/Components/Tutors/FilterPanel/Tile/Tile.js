import React from 'react'
import {
	TileBox,
	TileIcon,
	SearchSelectDateTile,
} from '../../../../Assets/Styles/Tutors/Tile.styles'
import 'react-datepicker/dist/react-datepicker.css'
import SelectComponent from '../../../Main/SelectComponent'
import DatePickerComponent from '../../../Main/DatePickerComponent'
import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'

function Tile({ icon, type, id, options = [], selectedValue, disabled }) {
	const { setSelectedOptions } = useSelectedOptions()

	const handleChange = event => {
		const value = event.target.value
		if (id === 'mode' && value.toLowerCase() === 'zdalnie') {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				city: '', // resetowanie miasta
				[id]: value,
			}))
		} else {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				[id]: value,
			}))
		}
	}

	const handleDateChange = date => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			date: date,
		}))
	}

	const getPlaceholder = () => {
		switch (id) {
			case 'subject':
				return '- Przedmiot -'
			case 'level':
				return '- Poziom nauki -'
			case 'mode':
				return '- Tryb nauki -'
			case 'city':
				return '- Miasto -'
			default:
				return '-'
		}
	}

	const placeholderOption = { value: '', label: getPlaceholder() }
	const optionExists = options.some(
		option => option.label === placeholderOption.label
	)
	const modifiedOptions = optionExists
		? options
		: [placeholderOption, ...options]

	return (
		<TileBox>
			<TileIcon icon={icon} />
			{type === 'date' ? (
				<SearchSelectDateTile>
					<DatePickerComponent
						startDate={selectedValue}
						setStartDate={handleDateChange}
						dateName='- Dzień korepetycji  -'
					/>
				</SearchSelectDateTile>
			) : (
				<SelectComponent
					options={modifiedOptions}
					styleType='filter'
					selectedValue={selectedValue}
					onChange={handleChange}
					disabled={disabled}
				/>
			)}
		</TileBox>
	)
}

export default Tile
