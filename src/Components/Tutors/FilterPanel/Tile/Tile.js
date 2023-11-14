import React, { useContext } from 'react'
import { AvailabilityContext } from '../../../../Context/AvailabilityContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	TileBox,
	TileIcon,
	Select,
	Option,
	SearchSelectDateTile,
} from '../../../../Assets/Styles/Tutors/Tile.styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import SelectComponent from '../../../Main/SelectComponent'
import DatePickerComponent from '../../../Main/DatePickerComponent'
import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'

function Tile({ icon, type, id, options = [], selectedValue }) {
	console.log('Otrzymana data w Tile:', selectedValue)
	const { setSelectedOptions } = useSelectedOptions()

	const handleChange = event => {
		const value = event.target.value // Uzyskaj wartość z wybranego elementu
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			[id]: value,
		}))
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

	// Ensure that the placeholder is not duplicated if already present
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
				/>
			)}
		</TileBox>
	)
}

export default Tile
