import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../GlobalStyles/theme'

export const FooterContainer = styled.div`
	background-color: ${theme.colors.primary};
	padding: 40px 20px;
	color: #fff;
	margin-top: auto;
`

export const FooterBoxes = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`

export const FooterBox = styled.div`
	flex-basis: 50%;

	@media (min-width: 768px) {
		flex-basis: 33.3%;
	}
`

export const FooterName = styled.a`
	font-size: 1.8rem;
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	margin-bottom: 10px;

	@media (min-width: 992px) {
		font-size: 2.2rem;
	}
`

export const FooterText = styled.p`
	font-size: 1.2rem;
	margin-bottom: 10px;

	@media (min-width: 992px) {
		font-size: 1.4rem;
	}
`

export const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`

export const FooterLink = styled.a`
	font-size: 1.2rem;
	margin-bottom: 10px;
	cursor: pointer;

	@media (min-width: 992px) {
		font-size: 1.4rem;
	}
`

export const FooterContact = styled.p`
	font-size: 1.5rem;
	text-transform: uppercase;

	@media (min-width: 768px) {
		text-align: center;
	}

	@media (min-width: 992px) {
		font-size: 1.8rem;
	}
`

export const FooterIcons = styled.div`
	display: flex;
	cursor: pointer;

	@media (min-width: 768px) {
		justify-content: center;
	}
`

export const FooterIcon = styled(FontAwesomeIcon)`
	width: 20px;
	height: 20px;
	margin: 10px 2px;

	@media (min-width: 992px) {
		width: 25px;
		height: 25px;
	}
`
