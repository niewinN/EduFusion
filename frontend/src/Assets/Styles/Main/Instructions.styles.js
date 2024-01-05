import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const InstructionContainer = styled.div`
	padding: 20px;
`

export const Title = styled.h2`
	font-size: 2rem;
	color: ${theme.colors.primary};
	margin-bottom: 20px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 2.3rem;
	}

	@media (min-width: 1024px) {
		font-size: 3rem;
	}
`

export const InstructionSection = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`

export const InstructionBoxes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media (min-width: 768px) {
		flex-basis: 60%;
	}
`

export const InstructionBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;

	&:nth-of-type(2) {
		flex-direction: row-reverse;
	}
`
export const InstructionNrBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.secondary};
	color: #fff;
	font-weight: bold;
	font-size: 2rem;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	/* margin-right: 20px; */
	margin-right: ${props => (props.isSecondBox ? '0' : '20px')};
	margin-left: ${props => (props.isSecondBox ? '20px' : '0')};

	@media (min-width: 768px) {
		width: 80px;
		height: 80px;
	}
	@media (min-width: 1024px) {
		width: 100px;
		height: 100px;
	}
`

export const InstructionNr = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	background-color: ${theme.colors.secondary};
	width: 60px;
	height: 60px;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 80px;
		height: 80px;
	}

	@media (min-width: 1024px) {
		width: 100px;
		height: 100px;
	}
`

export const InstructionTextBox = styled.div``

export const InstructionTitle = styled.h3`
	font-size: 1.4rem;
	margin-bottom: 5px;

	@media (min-width: 768px) {
		font-size: 1.6rem;
	}

	@media (min-width: 1024px) {
		font-size: 1.8rem;
	}
`

export const InstructionText = styled.p`
	font-size: 1.2rem;

	@media (min-width: 768px) {
		font-size: 1.4rem;
	}

	@media (min-width: 1024px) {
		font-size: 1.6rem;
	}
`

export const InstructionImgBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 100%; */

	@media (min-width: 768px) {
		flex-basis: 40%;
	}
`

export const InstructionImg = styled.img`
	width: 200px;

	@media (min-width: 1024px) {
		width: 300px;
	}
`
