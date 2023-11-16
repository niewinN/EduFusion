import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const RegisterSection = styled.div`
	padding: 50px 20px;
`

export const RegisterBox = styled.div`
	/* display: flex; */
	align-items: center;
	justify-content: space-around;
	box-shadow: 0 2px 15px #646464;
	padding: 20px;
	border-radius: 8px;

	@media (min-width: 768px) {
		display: flex;
	}
`

export const RegisterImgBox = styled.div`
	/* width: 100%; */
	flex-basis: 55%;
	/* padding: 40px; */
	@media (min-width: 768px) {
		/* padding: 40px; */
	}
`

export const RegisterImg = styled.img`
	/* width: 300px; */
	width: 100%;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`

export const FormTitle = styled.p`
	text-align: center;
	font-size: 2rem;
	color: ${theme.colors.secondary};
	font-weight: 500;
	margin-bottom: 15px;
`

export const RegisterFormBox = styled.div`
	flex-basis: 35%;

	/* margin-left: 100px; */
`
