import React from "react"
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
} from "../../Assets/Styles/AboutUs/WhyUs.styles"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
import { whyUsData } from "../../constants/whyUsData"

function WhyUs() {
	return (
		<>
			<WhyUsContainer>
				<Wrapper>
					<Title>Dlaczego EduFusion?</Title>
					<TipsBox>
						{whyUsData.map(({ title, description, photo, isBig }) => (
							<TipBox key={title}>
								<TipTextBox>
									<TipTitle>{title}</TipTitle>
									<TipDescp>{description}</TipDescp>
								</TipTextBox>
								<TipPhotoBox>
									{isBig ? (
										<TipPhotoBig src={photo} />
									) : (
										<TipPhoto src={photo} />
									)}
								</TipPhotoBox>
							</TipBox>
						))}
					</TipsBox>
				</Wrapper>
			</WhyUsContainer>
		</>
	)
}

export default WhyUs
