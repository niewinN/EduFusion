import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const TutorCardsContainer = styled.div`
	padding: 0 20px 40px 20px;
`

export const ErrorFilterMsg = styled.p`
	text-align: center;
	color: ${theme.colors.primary};
	font-size: 1.6rem;
	font-weight: bold;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`
