import React from 'react'
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
} from '../../Assets/Styles/UI/Footer.styles'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
	// const handleClick = e => e.preventDefault()

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
								<FooterLink>O firmie</FooterLink>
								<FooterLink>Ogólne warunki</FooterLink>
								<FooterLink>Klauzule informacyjne</FooterLink>
								<FooterLink>Polityka prywatności</FooterLink>
							</FooterLinks>
						</FooterBox>
						<FooterBox>
							<FooterContact>Kontakt</FooterContact>
							<FooterIcons>
								<FooterIcon icon={faFacebook} />
								<FooterIcon icon={faInstagram} />
								<FooterIcon icon={faYoutube} />
								<FooterIcon icon={faTiktok} />
							</FooterIcons>
						</FooterBox>
					</FooterBoxes>
				</Wrapper>
			</FooterContainer>
		</>
	)
}

export default Footer
