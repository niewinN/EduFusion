import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerComponent({ startDate, setStartDate, dateName }) {
	// console.log('Data wybrana w DatePickerComponent:', startDate)
	return (
		<DatePicker
			selected={startDate}
			onChange={date => {
				console.log('Wybrana data:', date)
				setStartDate(date) // Przekazujemy datę bezpośrednio
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
