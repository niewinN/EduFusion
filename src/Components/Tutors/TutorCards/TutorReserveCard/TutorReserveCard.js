import React from 'react'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import {
	CardBox,
	// CardCalendar,
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
	CardRightTitle,
} from '../../../../Assets/Styles/Tutors/TutorReserveCard.styles'
import ScheduleCalendar from './ScheduleCalendar'
// import { ThemeProvider } from 'styled-components'
// import theme from '../../../../Assets/Styles/GlobalStyles/theme'

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
				<CardRightTitle>
					Kliknij w wolny termin i zarezerwuj zajęcia!
				</CardRightTitle>
				{/* <ThemeProvider theme={theme}> */}
				<ScheduleCalendar />
				{/* </ThemeProvider> */}
				<CardPriceAndBtn>
					<CardPrice>{price} / 60 min</CardPrice>
					<CardReserveBtn>Zarezerwuj</CardReserveBtn>
				</CardPriceAndBtn>
			</CardRight>
		</CardBox>
	)
}

export default TutorReserveCard
