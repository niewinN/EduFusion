import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const CardBox = styled.div`
	/* padding: 15px; */
	display: flex;
	align-items: center;
	/* justify-content: space-around; */
	margin: 15px;
	border-bottom: 2px solid ${theme.colors.primary};
`

export const CardDate = styled.div`
	flex-basis: 35%;
	text-align: center;
	font-size: 1.2rem;
`

export const CardDay = styled.p`
	font-size: 3rem;
`

export const CardDayOfWeek = styled.p`
	margin-bottom: 10px;
`

export const CardMontAndYear = styled.p`
	text-transform: uppercase;
`

export const CardInformation = styled.div`
	flex-basis: 65%;
	font-size: 1.2rem;
	margin-left: 10px;
	/* display: flex;
	flex-direction: column;
	justify-content: space-around; */
`

export const CardSubject = styled.p`
	text-align: center;
	font-size: 1.5rem;
	color: ${theme.colors.secondary};
	margin-bottom: 15px;
	text-transform: uppercase;
`

export const CardTutor = styled.p`
	margin-bottom: 5px;
`

export const CardLevel = styled.p`
	margin-bottom: 5px;
`

export const CardMode = styled.p`
	margin-bottom: 5px;
`

export const CardCity = styled.p`
	margin-bottom: 5px;
`

export const CardTime = styled.p`
	margin-bottom: 10px;
`

export const DataBold = styled.span`
	font-weight: bold;
`
