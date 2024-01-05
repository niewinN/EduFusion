import styled from 'styled-components'
import theme from '../GlobalStyles/theme'
// import forWhomImg from '../../Images/AboutUs/forwhom.png'

export const ForWhomContainer = styled.div`
	position: relative;
	padding: 50px 20px;
`

export const Title = styled.h2`
	font-size: 2rem;
	text-align: center;
	color: ${theme.colors.primary};
	margin-bottom: 15px;

	@media (min-width: 992px) {
		font-size: 2.5rem;
	}
`

export const Description = styled.p`
	font-size: 1.5rem;
	color: ${theme.colors.secondary};

	@media (min-width: 992px) {
		font-size: 1.8rem;
	}
`

// export const ForWhomPhoto = styled.div`
// 	position: absolute;
// 	top: 30px;
// 	right: 10px;
// 	background-image: url(${forWhomImg});
// 	background-size: cover;
// 	width: 50px;
// 	height: 50px;
// 	color: black;
// 	z-index: 9999999;
// `
