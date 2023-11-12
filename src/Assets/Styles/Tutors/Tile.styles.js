import styled from 'styled-components'
import theme from '../GlobalStyles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchSelectDate } from '../Main/SearchPanel.styles'

export const TileBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid ${theme.colors.secondary};
	box-shadow: 0 2px 15px #646464;
	margin: 10px;
	width: 180px;
	flex-grow: 1;
`

export const TileIcon = styled(FontAwesomeIcon)`
	font-size: 50px;
	padding: 20px;
	color: ${theme.colors.secondary};
`

export const Select = styled.select`
	width: 100%;
	font-size: 1.7rem;
	border: none;
	outline: none;
	padding: 10px;
	text-align: center;
	background-color: ${theme.colors.secondary};
	color: #fff;

	-webkit-appearance: none; /* Usuwa strzałki dla WebKit i Blink */
	-moz-appearance: none; /* Usuwa strzałki dla Gecko */
	appearance: none; /* Standardowa właściwość dla pozostałych przeglądarek */
`

export const Option = styled.option`
	font-size: 1.7rem;
`
export const SearchSelectDateTile = styled(SearchSelectDate)`
	.datePicker {
		margin: 0;
		/* padding: 10px; */
		background-color: ${theme.colors.secondary};
		border-radius: 0;

		.react-datepicker__input-container {
			background-color: ${theme.colors.secondary};
		}
	}
	.react-datepicker__input-container input {
		background-color: ${theme.colors.secondary};
		font-size: 1.7rem;
		text-align: center;
		color: #fff;
		padding: 10px;
		margin: 0;
		border-radius: 0;
	}

	.react-datepicker__input-container input::placeholder {
		color: #fff;
	}
`
