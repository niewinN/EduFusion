import React, { useEffect, useState } from 'react'
import TutorReserveCard from './TutorReserveCard/TutorReserveCard'
import { Wrapper } from '../../../Assets/Styles/GlobalStyles/wrapper'
import axios from 'axios'
import {
	TutorCardsContainer,
	ErrorFilterMsg,
} from '../../../Assets/Styles/Tutors/TutorCards.styles'

function TutorCards({ filteredTutors }) {
	// eslint-disable-next-line
	const [tutors, setTutors] = useState([])

	useEffect(() => {
		axios
			.get(`http://localhost:8080/tutors`)
			.then(response => {
				console.log(response.data)
				const tutorsWithLocalImagePath = response.data.map(tutor => {
					return {
						...tutor,
						img: `/images/${tutor.img}`,
						// name: tutor.firstName,
					}
				})

				console.log(`jak to wyglada`, tutorsWithLocalImagePath)
				setTutors(tutorsWithLocalImagePath)
			})
			.catch(error => {
				console.error('Błąd podczas pobierania danych:', error)
			})
	}, [])

	return (
		<TutorCardsContainer>
			<Wrapper>
				{filteredTutors.length === 0 ? (
					<ErrorFilterMsg>
						Nie znaleziono korepetytorów spełniających twoje wymagania!
					</ErrorFilterMsg>
				) : (
					filteredTutors.map(tutor => (
						<TutorReserveCard
							key={tutor.id}
							img={tutor.img}
							name={tutor.firstName}
							desc={tutor.desc}
							subject={tutor.subject}
							price={tutor.price}
							email={tutor.email}
							city={tutor.city}
							selectedTutorId={tutor.id}
						/>
					))
				)}
			</Wrapper>
		</TutorCardsContainer>
	)
}

export default TutorCards
