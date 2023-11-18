import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const LessonsContainer = styled.div`
	box-shadow: 0 2px 15px #646464;
	border-radius: 8px;
	flex-basis: 50%;

	@media (min-width: 900px) {
		flex-basis: 60%;
	}

	@media (min-width: 1200px) {
		flex-basis: 70%;
	}
`

export const Title = styled.p`
	text-align: center;
	padding: 10px;
	background-color: ${theme.colors.secondary};
	border-radius: 8px 8px 0 0;
	color: #fff;
	font-size: 1.6rem;
`

export const LessonsBtnBox = styled.div`
	display: flex;
	justify-content: space-around;
`

export const LessonsBtn = styled.button`
	border: none;
	padding: 10px;
	background-color: transparent;
	color: #646464;
	font-size: 1.5rem;
`

export const LessonsBox = styled.div`
	padding-bottom: 10px;
	margin-bottom: 20px;
`
