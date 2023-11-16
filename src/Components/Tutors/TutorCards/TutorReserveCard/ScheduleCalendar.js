// ScheduleCalendar.js
import React, { useContext, useState } from 'react'
// import theme from '../../../../Assets/Styles/GlobalStyles/theme'
// import { AvailabilityContext } from '../../../../Context/AvailabilityContext'
import { addDays, format } from 'date-fns'
import { pl } from 'date-fns/locale'
// import {
// 	CalendarWrapper,
// 	DayWrapper,
// 	DateLabel,
// 	TimeSlotsWrapper,
// 	TimeSlot,
// } from './StyledComponents'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'
import { SelectedOptionsContext } from '../../../../Context/SelectedOptionsContext'

export const CalendarWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	max-width: 600px;
	/* margin: auto; */
`

export const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;

	@media (min-width: 740px) {
		font-size: 1.4rem;
	}

	@media (min-width: 1024px) {
		font-size: 1.7rem;
	}
`

export const DateLabel = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`

export const FullDateLabel = styled.div`
	margin-bottom: 10px;
	white-space: nowrap;
`

export const TimeSlotsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;
`

export const TimeSlot = styled.div`
	padding: 5px 10px;
	background-color: ${props => (props.selected ? '#78ADDB' : 'e0e0e0')};
	border-radius: 5px;
	border: 1px solid #646464;
	box-shadow: 0 2px 15px #646464;
	cursor: pointer;
`
const ShowMoreButton = styled.button`
	padding: 5px 10px;
	margin: 5px 0 15px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	background: none;
	width: 100%;
	color: #000;
	font-size: 1.2rem;
	outline: none;
`

export const MoreIcon = styled(FontAwesomeIcon)`
	margin-left: 5px;
`

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
	// const { selectedDate, defaultAvailability } = useContext(AvailabilityContext)
	const [isExpanded, setIsExpanded] = useState(false)
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)

	const { selectedOptions } = useContext(SelectedOptionsContext)
	const selectedDate = selectedOptions.date
	// const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
	// 	addDays(selectedDate, i)
	// )

	const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
		addDays(selectedDate, i)
	)

	const handleTimeSlotClick = (day, time) => {
		const newSelection = [day, time]
		setSelectedTimeSlot(prev =>
			prev && prev[0] === day && prev[1] === time ? null : newSelection
		)
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
				{daysOfWeek.map(day => {
					const dayOfWeek = day.getDay() // Pobiera dzień tygodnia (0-6)
					const dayLabel = dayLabels[dayOfWeek === 0 ? 6 : dayOfWeek - 1] // Przystosowanie do twojego formatu etykietowania dni
					const times = selectedTutor
						? selectedTutor.availability[dayLabel] || []
						: []
					const timesToShow = isExpanded ? times : times.slice(0, 3)
					const formattedDay = format(day, 'yyyy-MM-dd')

					return (
						<DayWrapper key={day}>
							<DateLabel>{format(day, 'EEE', { locale: pl })}</DateLabel>
							<FullDateLabel>
								{format(day, 'dd MMM', { locale: pl })}
							</FullDateLabel>
							<TimeSlotsWrapper>
								{timesToShow.map(time => (
									<TimeSlot
										key={time}
										selected={
											selectedTimeSlot &&
											selectedTimeSlot[0] === formattedDay &&
											selectedTimeSlot[1] === time
										}
										onClick={() => handleTimeSlotClick(formattedDay, time)}>
										{time}
									</TimeSlot>

									// <TimeSlot
									// 	key={time}
									// 	isSelected={
									// 		selectedTimeSlot &&
									// 		selectedTimeSlot[0] === formattedDay &&
									// 		selectedTimeSlot[1] === time
									// 	}
									// 	onClick={() => handleTimeSlotClick(formattedDay, time)}>
									// 	{time}
									// </TimeSlot>
								))}
							</TimeSlotsWrapper>
						</DayWrapper>
					)
				})}
			</CalendarWrapper>
			{/* {Object.values(defaultAvailability).some(times => times.length > 5) && ( */}
			{hasMoreThanThreeTimeslots && (
				<ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
					<MoreIcon icon={isExpanded ? faArrowUp : faArrowDown} />
				</ShowMoreButton>
			)}
			{/* )} */}
		</>
	)
}

export default ScheduleCalendar
