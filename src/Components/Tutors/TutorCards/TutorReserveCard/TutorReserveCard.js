import React from 'react'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import {
	CardBox,
	CardCalendar,
	CardPhotoBox,
	CardPrice,
	CardPriceAndBtn,
	CardReserveBtn,
	InfoBtn,
	InfoText,
	TutorDesc,
	TutorName,
	TutorSubject,
	CardRight,
} from '../../../../Assets/Styles/Tutors/TutorReserveCard.styles'

function TutorReserveCard({ name, desc, subject, price }) {
	return (
		<CardBox>
			<CardPhotoBox>
				<InfoBtn icon={faCircleQuestion}></InfoBtn>
				<InfoText>
					<TutorName>{name}</TutorName>
					<TutorDesc>{desc}</TutorDesc>
					<TutorSubject>{subject}</TutorSubject>
				</InfoText>
			</CardPhotoBox>
			<CardRight>
				<CardCalendar>Kalendarz</CardCalendar>
				<CardPriceAndBtn>
					<CardPrice>{price} / 60 min</CardPrice>
					<CardReserveBtn>Zarezerwuj</CardReserveBtn>
				</CardPriceAndBtn>
			</CardRight>
		</CardBox>
	)
}

export default TutorReserveCard
