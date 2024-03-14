import React, { useEffect, useState } from "react"
import TutorCard from "./TutorCard/TutorCard"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
import {
	MainTutorsContainer,
	TutorsSlider,
	TutorsTitle,
} from "../../Assets/Styles/Main/MainTutors.styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios"

function MainTutors() {
	const [tutors, setTutors] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:8080/tutors")
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
				console.error("Błąd podczas pobierania danych:", error)
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
