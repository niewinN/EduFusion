import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const Title = styled.h2`
	padding: 20px;
	text-align: center;
	font-size: 2rem;

	@media (min-width: 992px) {
		font-size: 2.5rem;
	}
`
export const TipsBox = styled.div`
	padding-bottom: 50px;
`

export const TipBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;

	@media (min-width: 576px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 0px;

		&:nth-of-type(2) {
			flex-direction: row-reverse;
		}
	}
`

export const TipTextBox = styled.div`
	flex-basis: 40%;
`

export const TipTitle = styled.h3`
	font-size: 1.7rem;
	padding: 5px 0;
	border-bottom: 2px solid ${theme.colors.primary};

	@media (min-width: 992px) {
		font-size: 2.2rem;
	}
`

export const TipDescp = styled.p`
	padding: 15px 0;
	font-size: 1.5rem;

	@media (min-width: 992px) {
		font-size: 1.8rem;
	}
`
export const TipPhotoBox = styled.div``

export const TipPhoto = styled.img`
	width: 200px;

	@media (min-width: 992px) {
		width: 250px;
	}
`

export const TipPhotoBig = styled(TipPhoto)`
	@media (min-width: 992px) {
		width: 300px;
	}
`

export const WhyUsContainer = styled.div`
	background-color: ${theme.colors.secondary};
	color: #fff;
	padding: 20px;
`
