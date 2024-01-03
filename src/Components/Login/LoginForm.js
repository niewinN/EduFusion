import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useLogin } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import {
	FormButton,
	StyledTextField,
	ErrorText,
	StyledForm,
} from '../../Assets/Styles/Login/LoginForm.styles'
const bcrypt = require('bcryptjs')

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
	const navigate = useNavigate()
	const { onLoginSuccess } = useLogin()
	const [loginError, setLoginError] = useState('')
	// const verifyLogin = (email, password, users) => {
	// 	const user = users.find(u => u.email === email && u.password === password)
	// 	return !!user
	// }

	const verifyLogin = (email, password, users) => {
		const user = users.find(u => u.email === email)
		if (user) {
			// Porównaj zahaszowane hasło
			const isPasswordCorrect = bcrypt.compareSync(password, user.password)
			return isPasswordCorrect
		}
		return false
	}

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
				axios
					.get('http://localhost:8080/users')
					.then(response => {
						if (verifyLogin(values.email, values.password, response.data)) {
							onLoginSuccess(response.data.find(u => u.email === values.email))
							navigate('/')
							console.log('zalogowano')
						} else {
							setLoginError('E-mail lub hasło jest nieprawidłowe') // Ustawienie komunikatu o błędzie
						}
					})
					.catch(error => {
						console.error('Błąd podczas wczytywania danych:', error)
					})
					.finally(() => {
						setSubmitting(false)
					})
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
					{loginError && <ErrorText>{loginError}</ErrorText>}{' '}
					{/* Wyświetlanie błędu logowania */}
					<FormButton
						variant='contained'
						color='primary'
						disabled={isSubmitting}
						onClick={() => {
							submitForm()
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
