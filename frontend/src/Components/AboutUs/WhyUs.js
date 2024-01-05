import React from 'react'
import {
	Title,
	TipBox,
	TipDescp,
	TipPhoto,
	TipPhotoBox,
	TipTextBox,
	TipTitle,
	TipsBox,
	WhyUsContainer,
	TipPhotoBig,
} from '../../Assets/Styles/AboutUs/WhyUs.styles'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import WhyPhoto1 from '../../Assets/Images/AboutUs/whyus_photo1.png'
import WhyPhoto2 from '../../Assets/Images/AboutUs/whyus_photo2.png'
import WhyPhoto3 from '../../Assets/Images/AboutUs/whyus_photo3.png'

function WhyUs() {
	return (
		<>
			<WhyUsContainer>
				<Wrapper>
					<Title>Dlaczego EduFusion?</Title>
					<TipsBox>
						<TipBox>
							<TipTextBox>
								<TipTitle>Eksprecji w edukacji:</TipTitle>
								<TipDescp>
									Nasza społeczność skupia doświadczonych korepetytorów i
									nauczycieli, którzy są gotowi dzielić się swoją wiedzą i
									doświadczeniem
								</TipDescp>
							</TipTextBox>
							<TipPhotoBox>
								<TipPhotoBig src={WhyPhoto1}></TipPhotoBig>
							</TipPhotoBox>
						</TipBox>
						<TipBox>
							<TipTextBox>
								<TipTitle>Personalizowane podejście:</TipTitle>
								<TipDescp>
									Tworzymy indywidualne plany nauki, dostosowane do Twoich celów
									i umiejętności
								</TipDescp>
							</TipTextBox>
							<TipPhotoBox>
								<TipPhoto src={WhyPhoto2}></TipPhoto>
							</TipPhotoBox>
						</TipBox>
						<TipBox>
							<TipTextBox>
								<TipTitle>Dostępność i wygoda:</TipTitle>
								<TipDescp>
									Nauka online w dowolnym miejscu i czasie, z wykorzystaniem
									różnych platform oraz stacjonarnie w wybranych miastach
								</TipDescp>
							</TipTextBox>
							<TipPhotoBox>
								<TipPhotoBig src={WhyPhoto3}></TipPhotoBig>
							</TipPhotoBox>
						</TipBox>
					</TipsBox>
				</Wrapper>
			</WhyUsContainer>
		</>
	)
}

export default WhyUs
