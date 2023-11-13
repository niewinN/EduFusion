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
	CardBottom,
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
				<CardBottom>
					<CardPrice>{price} / 60 min</CardPrice>
					<CardSubjcet>{subject}</CardSubjcet>
				</CardBottom>
			</CardInformation>
		</Card>
	)
}

export default TutorCard
