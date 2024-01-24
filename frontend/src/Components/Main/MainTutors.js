import React, { useEffect, useState } from 'react'
import TutorCard from './TutorCard/TutorCard'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	MainTutorsContainer,
	TutorsSlider,
	TutorsTitle,
} from '../../Assets/Styles/Main/MainTutors.styles'
// import tutor1 from '../../Assets/Images/Main/tutor1.png'
// import tutor2 from '../../Assets/Images/Main/tutor2.png'
// import tutor3 from '../../Assets/Images/Main/tutor3.png'
// import tutor4 from '../../Assets/Images/Main/tutor4.png'
// import tutor5 from '../../Assets/Images/Main/tutor5.png'
// import tutor6 from '../../Assets/Images/Main/tutor6.png'
// import tutor7 from '../../Assets/Images/Main/tutor7.png'
// import tutor8 from '../../Assets/Images/Main/tutor8.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'

function MainTutors() {
	const [tutors, setTutors] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:8080/tutors')
			.then(response => {
				const tutorsWithImages = response.data.map(tutor => {
					return {
						...tutor,
						img: `/images/${tutor.img}`,
					}
				})

				setTutors(tutorsWithImages)
			})
			.catch(error => {
				console.error('Błąd podczas pobierania danych:', error)
			})
	}, [])

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<>
			<MainTutorsContainer>
				<Wrapper>
					<TutorsTitle>Nasi korepetytorzy</TutorsTitle>
					<TutorsSlider>
						<Slider {...settings}>
							{tutors.map(tutor => (
								<TutorCard key={tutor.id} {...tutor} />
							))}
						</Slider>
					</TutorsSlider>
				</Wrapper>
			</MainTutorsContainer>
		</>
	)
}

export default MainTutors
