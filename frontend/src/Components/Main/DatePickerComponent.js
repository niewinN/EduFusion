import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerComponent({ startDate, setStartDate, dateName }) {
	return (
		<DatePicker
			selected={startDate}
			onChange={date => {
				console.log('Wybrana data:', date)
				setStartDate(date)
			}}
			dateFormat='d MMMM yyyy'
			placeholderText={dateName}
			wrapperClassName='datePicker'
			locale='pl'
			minDate={new Date()}
			withPortal
		/>
	)
}

export default DatePickerComponent
