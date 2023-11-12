import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const Card = styled.div`
	padding: 15px;
	background-color: #fff;
	border-radius: 8px;
	max-width: 300px; /* lub jakaś inna wartość */
	margin: auto; /* centruje kartę w slajdzie */
`

export const CardImgBox = styled.div``

export const CardImg = styled.img`
	width: 100%;
	border-radius: 8px;
`

export const CardInformation = styled.div``

export const CardName = styled.p`
	padding: 10px 0;
	font-size: 2.2rem;
	color: ${theme.colors.primary};
	font-weight: bold;
`

export const CardDesc = styled.p`
	font-size: 1.4rem;
`

export const CardPrice = styled.p`
	text-align: right;
	font-size: 1.6rem;
	font-weight: 500;
	color: ${theme.colors.secondary};
	padding: 10px 0;
`

export const CardSubjcet = styled.div`
	text-transform: uppercase;
	background-color: ${theme.colors.primary};
	padding: 5px;
	border-radius: 8px;
	text-align: center;
	color: #fff;
	font-size: 1.5rem;
`
