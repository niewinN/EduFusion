import React from 'react'
import {
	CardBox,
	CardCity,
	CardDate,
	CardDay,
	CardDayOfWeek,
	CardInformation,
	CardLevel,
	CardMode,
	CardMontAndYear,
	CardSubject,
	CardTutor,
	CardTime,
	DataBold,
} from '../../../../Assets/Styles/UserProfile/LessonCard.styles'
// import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'

function LessonCard({ lessonData }) {
	console.log('Dane lekcji:', lessonData)
	// const { selectedOptions } = useSelectedOptions()
	if (!(lessonData.selectedDate instanceof Date)) {
		lessonData.selectedDate = new Date(lessonData.selectedDate)
	}

	const monthYearFormat = { month: 'long', year: 'numeric' }
	const dayOfWeekFormat = { weekday: 'long' }

	const formattedMonthYear = lessonData.selectedDate.toLocaleDateString(
		'pl-PL',
		monthYearFormat
	)
	const formattedDayOfWeek = lessonData.selectedDate.toLocaleDateString(
		'pl-PL',
		dayOfWeekFormat
	)

	function getEndTime(startTimeString) {
		const [hours, minutes] = startTimeString.split(':').map(Number)
		const endTime = new Date()
		endTime.setHours(hours, minutes + 60)
		return endTime
	}

	const startTimeString = lessonData.startTime
	const endTime = getEndTime(startTimeString)

	const formattedStartTime = startTimeString
	const formattedEndTime = endTime.toTimeString().substring(0, 5)

	return (
		<CardBox>
			<CardDate>
				<CardDay>{lessonData.selectedDate.getDate()}</CardDay>
				<CardDayOfWeek>{formattedDayOfWeek}</CardDayOfWeek>
				<CardMontAndYear>{formattedMonthYear}</CardMontAndYear>
			</CardDate>
			<CardInformation>
				<CardSubject>
					<DataBold>{lessonData.subject}</DataBold>
				</CardSubject>
				<CardTutor>
					Prowadzący: <DataBold>{lessonData.tutorName}</DataBold>
				</CardTutor>
				<CardLevel>
					Poziom nauki: <DataBold>{lessonData.level}</DataBold>{' '}
				</CardLevel>
				<CardMode>
					Tryb nauki: <DataBold>{lessonData.mode}</DataBold>
				</CardMode>
				<CardCity>
					Miasto:{' '}
					<DataBold>
						{lessonData.city === '' ? 'Brak' : lessonData.city}
					</DataBold>
				</CardCity>
				<CardTime>
					Godzina zajęć:{' '}
					<DataBold>
						{formattedStartTime} - {formattedEndTime}
					</DataBold>
				</CardTime>
			</CardInformation>
		</CardBox>
	)
}

export default LessonCard
