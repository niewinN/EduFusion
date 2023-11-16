import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { Button } from '@mui/material'
import * as Yup from 'yup'
import styled from 'styled-components'
import theme from '../../Assets/Styles/GlobalStyles/theme'

const StyledForm = styled(Form)`
	/* padding: 20px; */
`

const FormButton = styled.button`
	width: 100%;
	border: none;
	padding: 10px;
	background-color: ${theme.colors.secondary};
	color: #fff;
	border-radius: 8px;
	margin-top: 15px;
	cursor: pointer;
	font-size: 1.5rem;
`
const StyledTextField = styled(TextField)`
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

const ErrorText = styled.div`
	font-size: 1rem;
	color: red;
`
//Schemat walidacji formularza z Yup
const validationSchema = Yup.object({
	firstName: Yup.string()
		.required('Imię jest wymagane')
		.matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, 'Podaj poprawnę imię '),
	lastName: Yup.string()
		.required('Nazwisko jest wymagane')
		.matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, 'Podaj poprawnę nazwisko'),
	email: Yup.string()
		.required('E-mail jest wymagany')
		.matches(
			/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
			'Podaj poprawny adres e-mail'
		),
	phoneNumber: Yup.string()
		.required('Numer telefonu jest wymagany')
		.matches(/^\+?(\d{8,15})$/, 'Podaj poprawny numer telefonu'),
	password: Yup.string()
		.required('Hasło jest wymagane')
		.min(6, 'Hasło musi zawierać min. 6 znaków'),
	confirmPassword: Yup.string()
		.required('Powtórzenie hasła jest wymagane')
		.oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same'),
})

function RegisterForm() {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={validationSchema}
			validateOnBlur={true}
			validateOnChange={false}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)
				setSubmitting(false)
			}}>
			{({ submitForm, isSubmitting, errors }) => (
				<StyledForm>
					<Field
						component={StyledTextField}
						name='firstName'
						type='text'
						label='Imię'
						fullWidth
						margin='normal'
					/>
					{errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
					<Field
						component={StyledTextField}
						name='lastName'
						type='text'
						label='Nazwisko'
						fullWidth
						margin='normal'
					/>
					{errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
					<Field
						component={StyledTextField}
						name='email'
						type='email'
						label='E-mail'
						fullWidth
						margin='normal'
					/>
					{errors.email && <ErrorText>{errors.email}</ErrorText>}
					<Field
						component={StyledTextField}
						name='phoneNumber'
						type='tel'
						label='Nr telefonu'
						fullWidth
						margin='normal'
					/>
					{errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
					<Field
						component={StyledTextField}
						name='password'
						type='password'
						label='Hasło'
						fullWidth
						margin='normal'
					/>
					{errors.password && <ErrorText>{errors.password}</ErrorText>}
					<Field
						component={StyledTextField}
						name='confirmPassword'
						type='password'
						label='Powtórz hasło'
						fullWidth
						margin='normal'
					/>
					{errors.confirmPassword && (
						<ErrorText>{errors.confirmPassword}</ErrorText>
					)}
					<FormButton
						variant='contained'
						color='primary'
						disabled={isSubmitting}
						onClick={submitForm}
						fullWidth>
						Zarejestruj się
					</FormButton>
				</StyledForm>
			)}
		</Formik>
	)
}

export default RegisterForm
