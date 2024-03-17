import styled from "styled-components"
import theme from "../GlobalStyles/theme"
import { TextField } from "formik-mui"
import { Form } from "formik"

export const StyledForm = styled(Form)``

export const FormButton = styled.button`
	width: 100%;
	border: none;
	padding: 10px;
	background-color: ${theme.colors.secondary};
	color: #fff;
	border-radius: 8px;
	margin-top: 15px;
	cursor: pointer;
	font-size: 1.5rem;
	width: ${props => (props.$fullWidth ? "100%" : "auto")};
`
export const StyledTextField = styled(TextField)`
	width: ${props => (props.$fullWidth ? "100%" : "auto")};
	& .MuiInputLabel-outlined {
		font-size: 14px; /* Ustawienie domyślnego rozmiaru etykiety */
	}

	&.MuiFormControl-root-MuiTextField-root {
		margin-top: 2px;
	}

	& .MuiFormHelperText-root {
		display: none;
	}

	& .MuiInputLabel-outlined.MuiInputLabel-shrink {
		transform: translate(14px, -6px) scale(0.75); /* Dostosuj, aby pasowało do większego fontu */
		font-size: 16px; /* Utrzymanie rozmiaru fontu po animacji */
		background-color: #fff; /* tło etykiety, aby zakryć obramowanie jeśli jest potrzebne */
		padding: 0 8px; /* lekki padding wokół tekstu etykiety, aby nie "wchodził" w obramowanie */
		z-index: 10;

		/* @media (min-width: 1024px) {
			font-size: 20px;
		} */
	}

	& .MuiOutlinedInput-notchedOutline {
		top: 0; /* Upewnij się, że notched outline nie jest zbyt wysoko */
	}

	& .MuiOutlinedInput-root {
		padding: 0; /* Usunięcie domyślnego paddingu */
		position: relative;
		line-height: 2em;
		top: -3px; /* Może być potrzebne dostosowanie, aby wynieść input wyżej */

		&.Mui-focused fieldset {
			border-color: ${theme.colors
				.primary}; /* zmień na preferowany kolor obramowania przy aktywacji */
			border-width: 2px; /* opcjonalnie, możesz też zmienić szerokość obramowania */
		}
	}

	& .MuiOutlinedInput-input {
		padding: 18px 14px;
		line-height: 15px;
		font-size: 16px;
	}
`

export const ErrorText = styled.div`
	font-size: 1rem;
	color: red;
`
