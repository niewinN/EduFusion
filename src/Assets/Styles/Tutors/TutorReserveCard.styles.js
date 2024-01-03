import styled, { css } from 'styled-components'
import theme from '../GlobalStyles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardBox = styled.div`
	border-radius: 8px;
	box-shadow: 0 2px 15px #646464;
	margin-bottom: 20px;
	/* min-height: 380px; */

	@media (min-width: 768px) {
		display: flex;
		/* flex-direction: column; */
	}
`

export const CardPhotoBox = styled.div`
	position: relative;
	background-image: url(${props => props.img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	/* height: 300px; */
	width: 100%;
	min-height: 380px;
	border-radius: 8px 8px 0 0;
	overflow: hidden;

	@media (min-width: 440px) {
		background-position: initial;
	}

	@media (min-width: 768px) {
		flex-basis: 50%;
		border-radius: 8px 0 0 8px;
		background-position: center;
	}

	@media (min-width: 1024px) {
		/* min-height: 400px; */
		background-position: initial;
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

	@media (min-width: 1024px) {
		font-size: 3rem;
		margin-bottom: 15px;
	}
`

export const TutorDesc = styled.p`
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 30px;

	@media (min-width: 1024px) {
		font-size: 2rem;
		padding: 20px;
	}
`

export const TutorSubject = styled.p`
	font-size: 2rem;
	text-transform: uppercase;
	color: ${theme.colors.primary};

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`

export const CardRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* margin-top: 20px; */
	padding: 20px;
	@media (min-width: 768px) {
		flex-basis: 50%;
	}
`

export const CardPriceAndBtn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	/* margin-top: 20px; */
	margin-top: auto;
`

export const CardPrice = styled.p`
	margin-bottom: 10px;
	font-size: 1.8rem;
	font-weight: bold;
	color: ${theme.colors.secondary};

	@media (min-width: 1024px) {
		font-size: 2.2rem;
	}
`

export const CardReserveBtn = styled.button`
	border: none;
	background-color: ${theme.colors.primary};
	color: #fff;
	padding: 5px 50px;
	border-radius: 6px;
	outline: none;
	cursor: pointer;
	font-size: 1.5rem;
	text-transform: uppercase;
	/* margin-bottom: 20px; */

	&:disabled {
		background-color: gray;
	}

	&:disabled:hover {
		cursor: no-drop;
	}

	@media (min-width: 1024px) {
		padding: 10px 70px;
	}
`

export const CardRightTitle = styled.h3`
	margin-bottom: 20px;
	color: ${theme.colors.secondary};
	text-align: center;

	@media (min-width: 1024px) {
		font-size: 1.7rem;
	}
`
