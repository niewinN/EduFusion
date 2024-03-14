import React from "react"
import {
	InformationContainer,
	InformationPicture,
	InformationStats,
	InformationStatsBox,
	InformationStatsText,
	InformationTitle,
	InformationText,
} from "../../Assets/Styles/AboutUs/Information.styles"
import infoPic from "../../Assets/Images/AboutUs/aboutus_info.png"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
import { informationData } from "../../constants/informationData"

function Information() {
	return (
		<Wrapper>
			<InformationContainer>
				<InformationText>
					<InformationTitle>Zobacz EduFusion w liczbach</InformationTitle>
					{informationData.map(item => (
						<InformationStatsBox key={item.description}>
							<InformationStats>{item.count}</InformationStats>
							<InformationStatsText>{item.description}</InformationStatsText>
						</InformationStatsBox>
					))}
				</InformationText>
				<InformationPicture src={infoPic} alt='Teacher'></InformationPicture>
			</InformationContainer>
		</Wrapper>
	)
}

export default Information
