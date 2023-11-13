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

function Tile({ icon, type, options, selectedValue }) {
	// const [startDate, setStartDate] = useState(null)

	const { selectedDate, setSelectedDate } = useContext(AvailabilityContext)

	const handleDateChange = date => {
		setSelectedDate(date)
		// Możesz także pobrać i ustawić dostępne terminy po zmianie daty
	}
	return (
		<TileBox>
			<TileIcon icon={icon} />
			{type === 'date' ? (
				<SearchSelectDateTile>
					<DatePicker
						// selected={startDate}
						// selected={selectedDate}
						selected={selectedValue}
						// onChange={date => setStartDate(date)}
						onChange={handleDateChange}
						dateFormat='d MMMM yyyy'
						placeholderText='- Dzień korepetycji -'
						wrapperClassName='datePicker'
						locale='pl'
						minDate={new Date()}
						customInput={<input inputMode='none' />}
						withPortal
					/>
				</SearchSelectDateTile>
			) : (
				<Select>
					{options.map((option, index) => (
						<Option
							key={index}
							value={option.value}
							selected={option.value === selectedValue}>
							{option.label}
						</Option>
					))}
				</Select>
			)}
		</TileBox>
	)
}

export default Tile
