import React from "react"
import {
	FooterContact,
	FooterBox,
	FooterContainer,
	FooterBoxes,
	FooterIcon,
	FooterIcons,
	FooterLink,
	FooterLinks,
	FooterName,
	FooterText,
} from "../../Assets/Styles/UI/Footer.styles"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
import { footerLinks, footerIcons } from "../../constants/footerData"

function Footer() {
	return (
		<>
			<FooterContainer>
				<Wrapper>
					<FooterBoxes>
						<FooterBox>
							<FooterName href='/'>EduFusion</FooterName>
							<FooterText>Copyright @ 2023 EduFusion</FooterText>
							<FooterText>Korepetycje dla wszystkich uczniów!</FooterText>
						</FooterBox>
						<FooterBox>
							<FooterLinks>
								{footerLinks.map((link, index) => (
									<FooterLink key={index}>{link.text}</FooterLink>
								))}
							</FooterLinks>
						</FooterBox>
						<FooterBox>
							<FooterContact>Kontakt</FooterContact>
							<FooterIcons>
								{footerIcons.map((icon, index) => (
									<FooterIcon key={index} icon={icon.icon} />
								))}
							</FooterIcons>
						</FooterBox>
					</FooterBoxes>
				</Wrapper>
			</FooterContainer>
		</>
	)
}

export default Footer
