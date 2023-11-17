import styled from 'styled-components'
import theme from '../GlobalStyles/theme'
import { ToastContainer } from 'react-toastify'

export const ContactContainer = styled.div`
	padding: 60px 20px;
`

export const ContactBox = styled.div`
	box-shadow: 0 2px 15px #646464;
	border-radius: 8px;
	/* padding: 20px; */
	overflow: hidden;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
	}
`

export const Form = styled.form`
	padding: 20px;

	@media (min-width: 768px) {
		flex-basis: 50%;
	}
`

export const FormTitle = styled.p`
	font-size: 2rem;
	color: ${theme.colors.secondary};
	text-align: center;
	font-weight: bold;

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`

export const FormBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px 0px;
	font-size: 1.6rem;

	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`

export const FormLabel = styled.label`
	/* font-size: 1.6rem; */
	margin-bottom: 10px;
`

export const FormInput = styled.input`
	border: none;
	border-bottom: 2px solid ${theme.colors.secondary};
	padding: 5px 0px;
	font-size: 1.6rem;
	outline: none;

	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`

export const FormTextarea = styled.textarea`
	border: none;
	border-bottom: 2px solid ${theme.colors.secondary};
	padding: 5px 0px;
	min-height: 80px;
	max-height: 80px;
	resize: vertical;
	font-size: 1.6rem;
	outline: none;

	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`

export const FormBtn = styled.button`
	width: 100%;
	border-radius: 8px;
	font-size: 1.6rem;
	border: none;
	background-color: ${theme.colors.secondary};
	padding: 8px;
	color: #fff;
	margin-top: 10px;
	cursor: pointer;

	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`

export const ContactImgBox = styled.div`
	position: relative;
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		flex-basis: 50%;
		height: 480px;
	}

	@media (min-width: 1024px) {
		height: 540px;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${theme.colors.secondary};
		clip-path: polygon(0 0, 0 100%, 100% 100%);
	}
`

export const ContactImg = styled.img`
	position: absolute;
	width: 250px;

	@media (min-width: 768px) {
		width: 300px;
	}

	@media (min-width: 1024px) {
		width: 350px;
	}
`

export const ErrorMessage = styled.div`
	margin-bottom: 10px;
	/* Tutaj możesz dodać więcej stylów, np. kolor tekstu, font itp. */
`

export const StyledToastContainer = styled(ToastContainer)`
	.Toastify__toast {
		border-radius: 4px;
		font-size: 1.2rem;
	}

	// Style dla szerokości i wyśrodkowania toastów na urządzeniach mobilnych
	@media only screen and (max-width: 480px) {
		width: 80% !important; // Szerokość toastów na urządzeniach mobilnych
		top: 8vh !important;
		left: auto !important; // Wyśrodkowanie toastów (50% - 1/2 szerokości)
		right: 0 !important;
	}
	/* &.Toastify__toast-container--bottom-center {
		@media (max-width: 480px) {
			width: 80% !important;
			margin-left: auto !important;
			margin-right: auto !important;
		}
	}
	.Toastify__toast--error {
		background-color: white !important;
		color: ${theme.colors.secondary} !important;
	}
	.Toastify__toast--success {
		background-color: blue !important;
		color: red !important;
	} */
`
