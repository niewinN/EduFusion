import styled from 'styled-components'
import theme from '../GlobalStyles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tutor1 from '../../Images/Main/tutor1.png'

export const CardBox = styled.div`
	border-radius: 8px;

	@media (min-width: 768px) {
		display: flex;
	}
`

export const CardPhotoBox = styled.div`
	position: relative;
	background-image: url(${tutor1});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	/* height: 300px; */
	width: 100%;
	height: 380px;
	border-radius: 8px 8px 0 0;
	overflow: hidden;

	@media (min-width: 768px) {
		flex-basis: 50%;
	}
`

export const InfoText = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	padding: 20px;
	clip-path: circle(0 at 50% 90%);
	background-color: rgba(0, 0, 0, 0.85);
	transition: clip-path 0.8s;
`

export const InfoBtn = styled(FontAwesomeIcon)`
	position: absolute;
	top: 3%;
	right: 3%;
	font-size: 3rem;
	background: none;
	border: none;
	cursor: pointer;
	z-index: 99;
	color: #fff;
	/* box-shadow: 0 2px 15px #646464; */

	&:hover + ${InfoText} {
		clip-path: circle(120% at 50% 90%);
	}
`

export const TutorName = styled.h3`
	margin-bottom: 30px;
	font-size: 2.5rem;
	color: ${theme.colors.primary};
`

export const TutorDesc = styled.p`
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 30px;
`

export const TutorSubject = styled.p`
	font-size: 2rem;
	text-transform: uppercase;
	color: ${theme.colors.primary};
`

export const CardRight = styled.div`
	@media (min-width: 768px) {
		flex-basis: 50%;
	}
`

export const CardCalendar = styled.div``

export const CardPriceAndBtn = styled.div``

export const CardPrice = styled.p``

export const CardReserveBtn = styled.button``
