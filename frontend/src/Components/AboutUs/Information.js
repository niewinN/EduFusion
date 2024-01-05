import React from 'react'
import {
	InformationContainer,
	InformationPicture,
	InformationStats,
	InformationStatsBox,
	InformationStatsText,
	InformationTitle,
	InformationText,
} from '../../Assets/Styles/AboutUs/Information.styles'
import infoPic from '../../Assets/Images/AboutUs/aboutus_info.png'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'

function Information() {
	return (
		<Wrapper>
			<InformationContainer>
				<InformationText>
					<InformationTitle>Zobacz EduFusion w liczbach</InformationTitle>
					<InformationStatsBox>
						<InformationStats>40+</InformationStats>
						<InformationStatsText>
							Sprawdzonych korepetytorów
						</InformationStatsText>
					</InformationStatsBox>
					<InformationStatsBox>
						<InformationStats>260+</InformationStats>
						<InformationStatsText>Zadowolonych uczniów</InformationStatsText>
					</InformationStatsBox>
					<InformationStatsBox>
						<InformationStats>2240+</InformationStats>
						<InformationStatsText>Przeprowadzonych zajęć</InformationStatsText>
					</InformationStatsBox>
				</InformationText>
				<InformationPicture src={infoPic} alt='Teacher'></InformationPicture>
			</InformationContainer>
		</Wrapper>
	)
}

export default Information
