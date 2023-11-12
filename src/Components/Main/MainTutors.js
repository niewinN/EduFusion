import React from 'react'
import TutorCard from './TutorCard/TutorCard'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	MainTutorsContainer,
	TutorsSlider,
	TutorsTitle,
} from '../../Assets/Styles/Main/MainTutors.styles'
import tutor1 from '../../Assets/Images/Main/tutor1.png'
import tutor2 from '../../Assets/Images/Main/tutor2.png'
import tutor3 from '../../Assets/Images/Main/tutor3.png'
import tutor4 from '../../Assets/Images/Main/tutor4.png'
import tutor5 from '../../Assets/Images/Main/tutor5.png'
import tutor6 from '../../Assets/Images/Main/tutor6.png'
import tutor7 from '../../Assets/Images/Main/tutor7.png'
import tutor8 from '../../Assets/Images/Main/tutor8.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MainTutors() {
	const tutors = [
		{
			id: 1,
			img: tutor1,
			name: 'Wiktor',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '70zł / 60 min',
			subject: 'matematyka',
		},
		{
			id: 2,
			img: tutor2,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 3,
			img: tutor3,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 4,
			img: tutor4,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 5,
			img: tutor5,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 6,
			img: tutor6,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 7,
			img: tutor7,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
		{
			id: 8,
			img: tutor8,
			name: 'Alina',
			desc: 'Studiuję na Politechnice Warszawskiej na kierunku Informatyka. Nauczanie to moja pasja i z chęcią podzielę się swoją wiedzą. Zapraszam na wspólną przygodę o twoje lepsze wyniki w nauce',
			price: '80zł / 60 min',
			subject: 'fizyka',
		},
	]

	const settings = {
		// dots: true,
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
