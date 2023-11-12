import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const InformationContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 20px;

	@media (min-width: 768px) {
		/* margin-top: 120px; */
		flex-direction: row;
		justify-content: space-around;
	}
`

// export const Wrapper = styled.div`
// 	max-width: 1260px;
// 	margin: 0 auto;
// 	padding: 0 20px;
// `

export const InformationText = styled.div`
	margin-right: 20px;
`

export const InformationTitle = styled.h1`
	color: ${theme.colors.secondary};

	@media (min-width: 768px) {
		font-size: 2.5rem;
	}

	@media (min-width: 992px) {
		font-size: 3.2rem;
	}
`

export const InformationStatsBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 10px;
`

export const InformationStats = styled.div`
	background-color: ${theme.colors.secondary};
	border-radius: 50%;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	margin-right: 20px;
	font-size: 1.5rem;

	@media (min-width: 768px) {
		font-size: 2rem;
		width: 70px;
		height: 70px;
	}
`

export const InformationStatsText = styled.div`
	font-size: 1.5rem;

	@media (min-width: 992px) {
		font-size: 2rem;
	}
`

export const InformationPictureBox = styled.div``

export const InformationPicture = styled.img`
	width: 320px;

	@media (min-width: 992px) {
		width: 420px;
	}
`
