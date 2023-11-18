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
} from '../../../../Assets/Styles/UserProfile/LessonCard.styles'

function LessonCard() {
	return (
		<CardBox>
			<CardDate>
				<CardDay>18</CardDay>
				<CardDayOfWeek>Czwartek</CardDayOfWeek>
				<CardMontAndYear>LISTOPAD 2023</CardMontAndYear>
			</CardDate>
			<CardInformation>
				<CardSubject>MATEMATYKA</CardSubject>
				<CardTutor>Prowadzący: Jakub</CardTutor>
				<CardLevel>Poziom nauki: Szkoła podstawowa </CardLevel>
				<CardMode>Tryb nauki: Zdalnie</CardMode>
				<CardCity>Miasto: Brak</CardCity>
			</CardInformation>
		</CardBox>
	)
}

export default LessonCard
