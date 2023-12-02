// import React, { useState } from 'react'
// import { addDays, format } from 'date-fns'
// import { pl } from 'date-fns/locale'
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'
// import {
// 	TimeSlot,
// 	ShowMoreButton,
// 	MoreIcon,
// 	TimeSlotsWrapper,
// 	FullDateLabel,
// 	DateLabel,
// 	DayWrapper,
// 	CalendarWrapper,
// } from '../../../../Assets/Styles/Tutors/ScheduleCalendar.styles'

// const dayLabels = [
// 	'monday',
// 	'tuesday',
// 	'wednesday',
// 	'thursday',
// 	'friday',
// 	'saturday',
// 	'sunday',
// ]

// const ScheduleCalendar = ({ selectedTutor }) => {
// 	const [isExpanded, setIsExpanded] = useState(false)
// 	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
// 	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
// 	const selectedDate = selectedOptions.date

// 	// const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
// 	// 	addDays(selectedDate, i)
// 	// )
// 	const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
// 		const day = addDays(selectedDate, i)
// 		if (isNaN(day.getTime())) {
// 			console.error('Nieprawidłowa data w daysOfWeek:', day)
// 			return new Date() // zwróć dzisiejszą datę jako fallback
// 		}
// 		return day
// 	})

// 	const handleTimeSlotClick = (day, time) => {
// 		const newSelection = [day, time]
// 		setSelectedTimeSlot(prev =>
// 			prev && prev[0] === day && prev[1] === time ? null : newSelection
// 		)

// 		setSelectedOptions(prevOptions => ({
// 			...prevOptions,
// 			selectedDate: day,
// 			startTime: time,
// 		}))
// 	}

// 	const hasMoreThanThreeTimeslots = daysOfWeek.some(day => {
// 		const dayLabel = dayLabels[new Date(day).getDay()]
// 		const times = selectedTutor
// 			? selectedTutor.availability[dayLabel] || []
// 			: []
// 		return times.length > 3
// 	})

// 	return (
// 		<>
// 			<CalendarWrapper>
// 				{daysOfWeek.map(day => {
// 					if (!day || isNaN(day.getTime())) {
// 						// Pomiń renderowanie dla nieprawidłowych dat
// 						return null
// 					}
// 					const dayOfWeek = day.getDay()
// 					const dayLabel = dayLabels[dayOfWeek === 0 ? 6 : dayOfWeek - 1]
// 					const times = selectedTutor
// 						? selectedTutor.availability[dayLabel] || []
// 						: []
// 					const timesToShow = isExpanded ? times : times.slice(0, 3)
// 					const formattedDay = format(day, 'yyyy-MM-dd')

// 					return (
// 						<DayWrapper key={day}>
// 							<DateLabel>{format(day, 'EEE', { locale: pl })}</DateLabel>
// 							<FullDateLabel>
// 								{format(day, 'dd MMM', { locale: pl })}
// 							</FullDateLabel>
// 							<TimeSlotsWrapper>
// 								{timesToShow.map(time => (
// 									<TimeSlot
// 										key={time}
// 										selected={
// 											selectedTimeSlot &&
// 											selectedTimeSlot[0] === formattedDay &&
// 											selectedTimeSlot[1] === time
// 										}
// 										onClick={() => handleTimeSlotClick(formattedDay, time)}>
// 										{time}
// 									</TimeSlot>
// 								))}
// 							</TimeSlotsWrapper>
// 						</DayWrapper>
// 					)
// 				})}
// 			</CalendarWrapper>

// 			{hasMoreThanThreeTimeslots && (
// 				<ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
// 					{isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
// 					<MoreIcon icon={isExpanded ? faArrowUp : faArrowDown} />
// 				</ShowMoreButton>
// 			)}
// 		</>
// 	)
// }

// export default ScheduleCalendar

import React, { useState } from 'react'
import { addDays, format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'
import {
	TimeSlot,
	ShowMoreButton,
	MoreIcon,
	TimeSlotsWrapper,
	FullDateLabel,
	DateLabel,
	DayWrapper,
	CalendarWrapper,
} from '../../../../Assets/Styles/Tutors/ScheduleCalendar.styles'

const dayLabels = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
	'sunday',
]

const ScheduleCalendar = ({ selectedTutor }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
	const selectedDate =
		selectedOptions.date instanceof Date ? selectedOptions.date : new Date()

	const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
		addDays(selectedDate, i)
	)

	const handleTimeSlotClick = (formattedDay, time) => {
		const newSelection = [formattedDay, time]
		setSelectedTimeSlot(prev =>
			prev && prev[0] === formattedDay && prev[1] === time ? null : newSelection
		)

		setSelectedOptions(prevOptions => ({
			...prevOptions,
			selectedDate: new Date(formattedDay), // Ensure it's a Date object
			startTime: time,
		}))
	}

	const hasMoreThanThreeTimeslots = daysOfWeek.some(day => {
		const dayLabel = dayLabels[new Date(day).getDay()]
		const times = selectedTutor
			? selectedTutor.availability[dayLabel] || []
			: []
		return times.length > 3
	})

	return (
		<>
			<CalendarWrapper>
				{daysOfWeek.map((day, index) => {
					const dayOfWeek = day.getDay()
					const dayLabel = dayLabels[dayOfWeek === 0 ? 6 : dayOfWeek - 1]
					const times = selectedTutor
						? selectedTutor.availability[dayLabel] || []
						: []
					const timesToShow = isExpanded ? times : times.slice(0, 3)
					const formattedDay = format(day, 'yyyy-MM-dd')

					return (
						<DayWrapper key={`day-${index}-${formattedDay}`}>
							<DateLabel>{format(day, 'EEE', { locale: pl })}</DateLabel>
							<FullDateLabel>
								{format(day, 'dd MMM', { locale: pl })}
							</FullDateLabel>
							<TimeSlotsWrapper>
								{timesToShow.map((time, timeIndex) => (
									<TimeSlot
										key={`time-${timeIndex}-${time}`}
										selected={
											selectedTimeSlot &&
											selectedTimeSlot[0] === formattedDay &&
											selectedTimeSlot[1] === time
										}
										onClick={() => handleTimeSlotClick(formattedDay, time)}>
										{time}
									</TimeSlot>
								))}
							</TimeSlotsWrapper>
						</DayWrapper>
					)
				})}
			</CalendarWrapper>

			{hasMoreThanThreeTimeslots && (
				<ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
					<MoreIcon icon={isExpanded ? faArrowUp : faArrowDown} />
				</ShowMoreButton>
			)}
		</>
	)
}

export default ScheduleCalendar
