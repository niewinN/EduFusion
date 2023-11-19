import React, { useEffect, useState } from 'react'
import TutorReserveCard from './TutorReserveCard/TutorReserveCard'
import { Wrapper } from '../../../Assets/Styles/GlobalStyles/wrapper'
import axios from 'axios'
import tutor1 from '../../../Assets/Images/Main/tutor1.png'
import tutor2 from '../../../Assets/Images/Main/tutor2.png'
import tutor3 from '../../../Assets/Images/Main/tutor3.png'
import tutor4 from '../../../Assets/Images/Main/tutor4.png'
import tutor5 from '../../../Assets/Images/Main/tutor5.png'
import tutor6 from '../../../Assets/Images/Main/tutor6.png'
import tutor7 from '../../../Assets/Images/Main/tutor7.png'
import tutor8 from '../../../Assets/Images/Main/tutor8.png'
import {
	TutorCardsContainer,
	ErrorFilterMsg,
} from '../../../Assets/Styles/Tutors/TutorCards.styles'

function TutorCards({ filteredTutors }) {
	// eslint-disable-next-line
	const [tutors, setTutors] = useState([])

	useEffect(() => {
		axios
			.get('/tutors.json')
			.then(response => {
				const tutorsWithImages = response.data.map(tutor => {
					switch (tutor.img) {
						case 'tutor1.jpg':
							return { ...tutor, img: tutor1 }
						case 'tutor2.jpg':
							return { ...tutor, img: tutor2 }
						case 'tutor3.jpg':
							return { ...tutor, img: tutor3 }
						case 'tutor4.jpg':
							return { ...tutor, img: tutor4 }
						case 'tutor5.jpg':
							return { ...tutor, img: tutor5 }
						case 'tutor6.jpg':
							return { ...tutor, img: tutor6 }
						case 'tutor7.jpg':
							return { ...tutor, img: tutor7 }
						case 'tutor8.jpg':
							return { ...tutor, img: tutor8 }

						default:
							return tutor
					}
				})

				setTutors(tutorsWithImages)
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
							name={tutor.name}
							desc={tutor.desc}
							subject={tutor.subject}
							price={tutor.price}
							selectedTutorId={tutor.id}
						/>
					))
				)}
			</Wrapper>
		</TutorCardsContainer>
	)
}

export default TutorCards
