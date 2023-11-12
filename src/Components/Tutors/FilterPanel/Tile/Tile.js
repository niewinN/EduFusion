import React, { useState } from 'react'
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

function Tile({ icon, type, options }) {
	const [startDate, setStartDate] = useState(null)
	return (
		<TileBox>
			<TileIcon icon={icon} />
			{type === 'date' ? (
				<SearchSelectDateTile>
					<DatePicker
						selected={startDate}
						onChange={date => setStartDate(date)}
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
						<Option key={index} value={option.value}>
							{option.label}
						</Option>
					))}
				</Select>
			)}
		</TileBox>
	)
}

export default Tile
