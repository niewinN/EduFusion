import React from 'react'
import TutorReserveCard from './TutorReserveCard/TutorReserveCard'
import { Wrapper } from '../../../Assets/Styles/GlobalStyles/wrapper'
import styled from 'styled-components'

const TutorCardsContainer = styled.div`
	padding: 20px;
`

function TutorCards() {
	const tutors = [
		{
			id: 1,
			// img: tutor1,
			name: 'Wiktor',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '70zł',
			subject: 'matematyka',
		},
		{
			id: 2,
			// img: tutor2,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł',
			subject: 'fizyka',
		},
	]

	return (
		<TutorCardsContainer>
			<Wrapper>
				{tutors.map(tutor => (
					<TutorReserveCard key={tutor.id} {...tutor} />
				))}
			</Wrapper>
		</TutorCardsContainer>
	)
}

export default TutorCards
