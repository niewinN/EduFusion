import React from "react"
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
} from "../../../../Assets/Styles/UserProfile/LessonCard.styles"
// import { useSelectedOptions } from '../../../../Context/SelectedOptionsContext'

function LessonCard({ lessonData, loggedInUser }) {
	const isTutor = loggedInUser.role === "TUTOR"

	const displayRole = isTutor ? "Uczeń" : "Nauczyciel"
	const displayName = isTutor ? lessonData.studentName : lessonData.tutorName

	const lessonDate = new Date(lessonData.lessonDate)

	const formattedMonthYear = lessonDate.toLocaleDateString("pl-PL", {
		month: "long",
		year: "numeric",
	})
	const formattedDayOfWeek = lessonDate.toLocaleDateString("pl-PL", {
		weekday: "long",
	})
	const dayOfMonth = lessonDate.getDate()

	function getEndTime(startTimeString) {
		const [hours, minutes] = startTimeString.split(":").map(Number)
		const endTime = new Date(lessonDate)
		endTime.setHours(hours, minutes + 60)
		return endTime.toTimeString().substring(0, 5)
	}

	const formattedStartTime = lessonData.startTime
	const formattedEndTime = getEndTime(formattedStartTime)

	return (
		<CardBox>
			<CardDate>
				<CardDay>{dayOfMonth}</CardDay>
				<CardDayOfWeek>{formattedDayOfWeek}</CardDayOfWeek>
				<CardMontAndYear>{formattedMonthYear}</CardMontAndYear>
			</CardDate>
			<CardInformation>
				<CardSubject>
					<DataBold>{lessonData.subject}</DataBold>
				</CardSubject>
				<CardTutor>
					{/* Prowadzący: <DataBold>{lessonData.tutorName}</DataBold> */}
					{displayRole}: <DataBold>{displayName}</DataBold>
				</CardTutor>
				<CardLevel>
					Poziom nauki: <DataBold>{lessonData.level}</DataBold>{" "}
				</CardLevel>
				<CardMode>
					Tryb nauki: <DataBold>{lessonData.mode}</DataBold>
				</CardMode>
				<CardCity>
					Miasto:{" "}
					<DataBold>
						{lessonData.city === "" ? "Brak" : lessonData.city}
					</DataBold>
				</CardCity>
				<CardTime>
					Godzina zajęć:{" "}
					<DataBold>
						{formattedStartTime} - {formattedEndTime}
					</DataBold>
				</CardTime>
			</CardInformation>
		</CardBox>
	)
}

export default LessonCard
