// ScheduleCalendar.js
import React, { useContext, useState } from 'react'
import theme from '../../../../Assets/Styles/GlobalStyles/theme'
import { AvailabilityContext } from '../../../../Context/AvailabilityContext'
import { addDays, format } from 'date-fns'
import { pl } from 'date-fns/locale'
// import {
// 	CalendarWrapper,
// 	DayWrapper,
// 	DateLabel,
// 	TimeSlotsWrapper,
// 	TimeSlot,
// } from './StyledComponents'

// StyledComponents.js
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const CalendarWrapper = styled.div`
	display: flex;
	/* flex-direction:; */
	justify-content: space-around;
	max-width: 600px;
	margin: auto;
`

export const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`

export const DateLabel = styled.div`
	font-weight: bold;
	margin-bottom: 5px; // zmniejszona wartość, aby etykiety były bliżej siebie
`

export const FullDateLabel = styled.div`
	margin-bottom: 10px;
`

export const TimeSlotsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;
`

export const TimeSlot = styled.div`
	padding: 5px 10px;
	background-color: #e0e0e0;
	border-radius: 5px;
	/* background-color: ${theme.colors.primary}; */
	/* color: #fff; */
	cursor: pointer;
	&:hover {
		/* background-color: #c8c8c8; */
		background-color: ${theme.colors.primary};
		color: #fff;
	}

	&:focus {
		background-color: ${theme.colors.primary};
		color: #fff;
	}
`
const ShowMoreButton = styled.button`
	padding: 5px 10px;
	margin-top: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	background: none;
	width: 100%;
	/* color: ${theme.colors.primary}; */
	color: #000;
	/* font-weight: bold; */
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

const ScheduleCalendar = () => {
	const { selectedDate, defaultAvailability } = useContext(AvailabilityContext)
	const [isExpanded, setIsExpanded] = useState(false) // Dodanie stanu do przechowywania rozwiniętych dni

	const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
		addDays(selectedDate, i)
	)

	return (
		<>
			<CalendarWrapper>
				{daysOfWeek.map((day, index) => {
					const dayLabel = dayLabels[index] // 'monday', 'tuesday', etc.
					const times = defaultAvailability[dayLabel] || []
					const timesToShow = isExpanded ? times : times.slice(0, 5)

					return (
						<DayWrapper key={day}>
							<DateLabel>{format(day, 'EEE', { locale: pl })}</DateLabel>
							<FullDateLabel>
								{format(day, 'dd MMM', { locale: pl })}
							</FullDateLabel>
							<TimeSlotsWrapper>
								{timesToShow.map(time => (
									<TimeSlot key={time}>{time}</TimeSlot>
								))}
							</TimeSlotsWrapper>
						</DayWrapper>
					)
				})}
			</CalendarWrapper>
			{Object.values(defaultAvailability).some(times => times.length > 5) && (
				<ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
					<MoreIcon icon={isExpanded ? faArrowUp : faArrowDown} />
				</ShowMoreButton>
			)}
		</>
	)
}

export default ScheduleCalendar

// 	return (
// 		<CalendarWrapper>
// 			{daysOfWeek.map((day, index) => {
// 				const dayLabel = dayLabels[index] // 'monday', 'tuesday', etc.
// 				return (
// 					<DayWrapper key={day}>
// 						<DateLabel>
// 							{format(day, 'EEE', { locale: pl })}{' '}
// 							{/* Skrócona forma dnia tygodnia */}
// 						</DateLabel>
// 						<FullDateLabel>
// 							{format(day, 'dd MMM', { locale: pl })} {/* Pełna data */}
// 						</FullDateLabel>
// 						<TimeSlotsWrapper>
// 							{defaultAvailability[dayLabel]?.map(time => (
// 								<TimeSlot key={time}>{time}</TimeSlot>
// 							))}
// 						</TimeSlotsWrapper>
// 					</DayWrapper>
// 				)
// 			})}
// 		</CalendarWrapper>
// 	)
// }

// export default ScheduleCalendar
