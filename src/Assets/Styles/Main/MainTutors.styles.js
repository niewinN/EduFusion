import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const MainTutorsContainer = styled.div`
	background-color: ${theme.colors.secondary};
	padding: 40px;
`

export const TutorsTitle = styled.h2`
	color: #fff;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: inline-block;
	padding: 20px 0 5px;
	font-size: 2rem;

	@media (min-width: 768px) {
		font-size: 2.2rem;
	}

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		background-color: ${theme.colors.primary};
		bottom: 0;
		left: 0;
		height: 3px;
	}
`

export const TutorsSlider = styled.div`
	.slick-slide {
		padding: 0 10px;
	}

	.slick-prev:before,
	.slick-next:before {
		@media (min-width: 1024px) {
			font-size: 25px;
		}
	}
`
