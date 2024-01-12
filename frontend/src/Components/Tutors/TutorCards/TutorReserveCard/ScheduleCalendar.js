import React, { useState, useEffect } from 'react'
import { addDays, format } from 'date-fns'
import { pl } from 'date-fns/locale'
import axios from 'axios'
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

const ScheduleCalendar = ({ selectedTutor, setSelectedLessonDate }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [reservedLessons, setReservedLessons] = useState([])
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
	const selectedDate =
		selectedOptions.date instanceof Date ? selectedOptions.date : new Date()

	// useEffect(() => {
	// 	if (selectedTutor) {
	// 		axios
	// 			.get(`http://localhost:8080/lessons`)
	// 			.then(response => {
	// 				setReservedLessons(
	// 					response.data.filter(lesson => lesson.tutorId === selectedTutor.id)
	// 				)
	// 			})
	// 			.catch(error => {
	// 				console.error('Error fetching lessons', error)
	// 			})
	// 	}
	// }, [selectedTutor])

	const isTimeSlotReserved = (day, time) => {
		return reservedLessons.some(
			lesson => lesson.lessonDate === day && lesson.startTime === time
		)
	}

	const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
		addDays(selectedDate, i)
	)

	// const handleTimeSlotClick = (formattedDay, time) => {
	// 	const newSelection = [formattedDay, time]
	// 	setSelectedTimeSlot(prev =>
	// 		prev && prev[0] === formattedDay && prev[1] === time ? null : newSelection
	// 	)

	// 	setSelectedOptions(prevOptions => ({
	// 		...prevOptions,
	// 		selectedDate: new Date(formattedDay), // Ensure it's a Date object
	// 		startTime: time,
	// 	}))
	// }

	const handleTimeSlotClick = (formattedDay, time) => {
		const newSelection = [formattedDay, time]
		setSelectedTimeSlot(prev =>
			prev && prev[0] === formattedDay && prev[1] === time ? null : newSelection
		)

		const selectedDateTime = new Date(`${formattedDay}T${time}`)
		const formattedDateOnly = format(selectedDateTime, 'yyyy-MM-dd') // Formatuj datę do postaci 'RRRR-MM-DD'

		setSelectedOptions(prevOptions => ({
			...prevOptions,
			selectedDate: selectedDateTime,
			startTime: time,
		}))

		setSelectedLessonDate(formattedDateOnly) // Ustaw tylko sformatowaną datę
	}

	// 	const selectedDateTime = new Date(`${formattedDay}T${time}`)
	// 	setSelectedOptions(prevOptions => ({
	// 		...prevOptions,
	// 		selectedDate: selectedDateTime,
	// 		startTime: time,
	// 	}))

	// 	setSelectedLessonDate(selectedDateTime)
	// }

	const hasMoreThanThreeTimeslots = daysOfWeek.some(day => {
		const dayLabel = dayLabels[new Date(day).getDay()]
		const times =
			selectedTutor && selectedTutor.availability
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
					const times =
						selectedTutor && selectedTutor.availability
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
								{timesToShow.length > 0 ? (
									timesToShow.map((time, timeIndex) => {
										const isReserved = isTimeSlotReserved(formattedDay, time)
										return (
											<TimeSlot
												key={`time-${timeIndex}-${time}`}
												selected={
													selectedTimeSlot &&
													selectedTimeSlot[0] === formattedDay &&
													selectedTimeSlot[1] === time
												}
												onClick={() =>
													!isReserved && handleTimeSlotClick(formattedDay, time)
												}
												disabled={isReserved}>
												{isReserved ? <s>{time}</s> : time}
											</TimeSlot>
										)
									})
								) : (
									<p>-</p>
								)}
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
