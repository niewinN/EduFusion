import React, { useState } from 'react'
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

const validationSchema = Yup.object({
	email: Yup.string()
		.required('E-mail jest wymagany')
		.matches(
			/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
			'Podaj poprawny adres e-mail'
		),
	password: Yup.string().required('Hasło jest wymagane'),
})

function LoginForm() {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={validationSchema}
			validateOnBlur={false}
			validateOnChange={true}
			// validateOnChange={formSubmitted}
			onSubmit={(values, { setSubmitting }) => {
				// setFormSubmitted(true)
				console.log(values)
				setSubmitting(false)
			}}>
			{({ submitForm, isSubmitting, errors, touched, setFieldTouched }) => (
				<StyledForm>
					<Field
						component={StyledTextField}
						name='email'
						type='email'
						label='E-mail'
						fullWidth
						margin='normal'
					/>
					{errors.email && touched.email && (
						<ErrorText>{errors.email}</ErrorText>
					)}
					<Field
						component={StyledTextField}
						name='password'
						type='password'
						label='Hasło'
						fullWidth
						margin='normal'
					/>
					{errors.password && touched.password && (
						<ErrorText>{errors.password}</ErrorText>
					)}
					<FormButton
						variant='contained'
						color='primary'
						disabled={isSubmitting}
						onClick={() => {
							submitForm()
							// Ustawienie wszystkich pól jako "dotkniętych" po próbie przesłania
							Object.keys(errors).forEach(field => {
								setFieldTouched(field, true, false)
							})
						}}
						fullWidth>
						Zaloguj się
					</FormButton>
				</StyledForm>
			)}
		</Formik>
	)
}

export default LoginForm
