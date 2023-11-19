import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const SearchPanelContainer = styled.div`
	padding: 20px;
`

export const SearchPanelBox = styled.div`
	box-shadow: 0 2px 15px #646464;
	border-radius: 8px;
	position: relative;
	overflow: hidden;

	background-color: ${theme.colors.primary};
	color: #fff;
`

export const SearchPanelTitle = styled.h1`
	padding: 20px 20px 0 20px;

	@media (min-width: 768px) {
		position: absolute;
		top: 0;
		left: 12%;
		font-size: 2.2rem;
	}

	@media (min-width: 1024px) {
		font-size: 2.5rem;
		left: 18%;
	}
`

export const SearchBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;

	@media (min-width: 768px) {
		flex-basis: 50%;
		padding: 100px 40px 40px 40px;
	}

	@media (min-width: 1024px) {
		padding: 150px 40px 40px 40px;
	}
`

export const SearchSelect = styled.select`
	margin: 10px 0;
	border-radius: 8px;
	border: none;
	padding: 8px;
	color: ${theme.colors.secondary};
`
export const SearchSelectDate = styled.div`
	position: relative;
	width: 100%;

	.datePicker {
		width: 100%;
		margin: 10px 0;
		border-radius: 8px;
		border: none;
		padding: 8px;
		color: ${theme.colors.secondary};
		font-family: inherit;
		background-color: #fff;
		cursor: pointer;

		&:focus {
			outline: none;
			box-shadow: 0 0 0 2px ${theme.colors.secondary};
		}
	}

	.react-datepicker__input-container {
		width: 100%;
	}

	.react-datepicker__input-container input {
		width: 100%;
		max-width: 100%;
		left: 0;
		border: none;
		outline: none;
		padding: 8px;
		border-radius: 8px;
		margin: 10px 0;

		&::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: ${theme.colors.secondary};
			opacity: 1; /* Firefox */
		}

		&:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: ${theme.colors.secondary};
		}

		&::-ms-input-placeholder {
			/* Microsoft Edge */
			color: ${theme.colors.secondary};
		}
	}
	.react-datepicker {
		font-size: 1.5rem;
		border: none;
		box-shadow: 0 2px 15px #646464;
		border-radius: 8px;

		&__header {
			background-color: ${theme.colors.secondary};
			width: 100%;
			border-bottom: none;
		}

		&__current-month {
			font-size: 1.5rem;
			color: #fff;
		}

		&__navigation-icon {
			border-color: #fff;
		}

		&__day-name,
		&__day {
			font-size: 1.5rem;
			width: 4rem;
			line-height: 4rem;
			margin: 0.2rem;

			@media (min-width: 1024px) {
				width: 5rem;
				line-height: 5rem;
			}
		}

		&__day-name {
			color: #fff;
		}

		&__day--selected,
		&__day--in-selecting-range,
		&__day--in-range {
			border-radius: 50%;
			background-color: ${theme.colors.secondary};
			color: #fff;
		}

		&__day:hover {
			background-color: ${theme.colors.secondary};
			color: #fff;
			border-radius: 50%;
		}
	}
`

export const SearchOption = styled.option``

export const SearchBtn = styled.button`
	margin-top: 10px;
	border-radius: 8px;
	background-color: ${theme.colors.secondary};
	border: none;
	padding: 8px;
	color: #fff;
	text-transform: uppercase;
`

export const SearchPhotoBox = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		flex-basis: 50%;
		align-items: flex-end;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;
		clip-path: polygon(0 0, 0 100%, 100% 100%);
	}
`

export const SearchPhoto = styled.img`
	z-index: 9;
	width: 260px;

	@media (min-width: 768px) {
		width: 350px;
	}

	@media (min-width: 1024px) {
		width: 450px;
	}
`

export const SearchSecondContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
	}
`
