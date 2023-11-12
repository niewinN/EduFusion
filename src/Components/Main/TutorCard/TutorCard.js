import React from 'react'
import {
	Card,
	CardDesc,
	CardImg,
	CardImgBox,
	CardInformation,
	CardName,
	CardPrice,
	CardSubjcet,
} from '../../../Assets/Styles/Main/TutorCard.styles'

function TutorCard({ img, name, desc, price, subject }) {
	return (
		<Card>
			<CardImgBox>
				<CardImg src={img}></CardImg>
			</CardImgBox>
			<CardInformation>
				<CardName>{name}</CardName>
				<CardDesc>{desc}</CardDesc>
				<CardPrice>{price}</CardPrice>
				<CardSubjcet>{subject}</CardSubjcet>
			</CardInformation>
		</Card>
	)
}

export default TutorCard
