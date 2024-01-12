import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
// import RegisterModal from '../../Layouts/UI/RegisterModal'
import { useNavigate } from 'react-router-dom'
import {
	StyledForm,
	FormButton,
	StyledTextField,
	ErrorText,
} from '../../Assets/Styles/Login/LoginForm.styles'
import CustomModal from '../../Layouts/UI/CustomModal'
import registerModalImg from '../../Assets/Images/Register/registerModal.png'
import { useLogin } from '../../Context/LoginContext'

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
	// const csrfToken = document.cookie.replace(
	// 	/(?:(?:^|.*;\s*)CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
	// 	'$1'
	// )
	const [isModalOpen, setModalOpen] = useState(false)
	const [isFormSubmitted, setFormSubmitted] = useState(false)
	const navigate = useNavigate()
	const { onLoginSuccess } = useLogin()
	const handleModalClose = () => {
		setModalOpen(false)
		if (isFormSubmitted) {
			navigate('/login')
		}
	}

	// const handleAutoClose = () => {
	// 	navigate('/login')
	// }

	return (
		<>
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
				validateOnBlur={false}
				validateOnChange={true}
				onSubmit={(values, { setSubmitting }) => {
					// 	axios
					// 		.post('http://localhost:8080/users', values)
					// 		.then(response => {
					// 			console.log('Użytkownik dodany:', response.data)
					// 			localStorage.setItem('token', response.data.jwt)
					// 			onLoginSuccess() // Zaktualizuj kontekst logowania
					// 			setFormSubmitted(true)
					// 			setModalOpen(true)
					// 		})
					// 		.catch(error => {
					// 			console.error('Błąd podczas dodawania użytkownika:', error)
					// 		})

					// 	setSubmitting(false)
					// }}>
					axios
						.post('http://localhost:8080/users', values)
						.then(response => {
							// Możesz tu zalogować użytkownika automatycznie lub przekierować do strony logowania
							console.log('Użytkownik dodany:', response.data)
							setFormSubmitted(true)
							setModalOpen(true) // Pokaż modal z potwierdzeniem
							// navigate('/login'); // Opcjonalnie przekieruj do logowania
						})
						.catch(error => {
							if (error.response) {
								// Zwróć uwagę na odpowiedź serwera, status, nagłówki
								console.error('Response data:', error.response.data)
								console.error('Response status:', error.response.status)
								console.error('Response headers:', error.response.headers)
							} else if (error.request) {
								// Żądanie zostało wysłane, ale nie otrzymano odpowiedzi
								console.error('No response received:', error.request)
							} else {
								// Wystąpił błąd podczas ustawiania żądania
								console.error('Error:', error.message)
							}
							console.error('Config:', error.config)
						})
						.finally(() => {
							setSubmitting(false)
						})
				}}>
				{({ submitForm, isSubmitting, errors, touched, setFieldTouched }) => (
					<StyledForm>
						<Field
							component={StyledTextField}
							name='firstName'
							type='text'
							label='Imię'
							fullWidth
							margin='normal'
						/>
						{errors.firstName && touched.firstName && (
							<ErrorText>{errors.firstName}</ErrorText>
						)}
						<Field
							component={StyledTextField}
							name='lastName'
							type='text'
							label='Nazwisko'
							fullWidth
							margin='normal'
						/>
						{errors.lastName && touched.lastName && (
							<ErrorText>{errors.lastName}</ErrorText>
						)}
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
							name='phoneNumber'
							type='tel'
							label='Nr telefonu'
							fullWidth
							margin='normal'
						/>
						{errors.phoneNumber && touched.phoneNumber && (
							<ErrorText>{errors.phoneNumber}</ErrorText>
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
						<Field
							component={StyledTextField}
							name='confirmPassword'
							type='password'
							label='Powtórz hasło'
							fullWidth
							margin='normal'
						/>
						{errors.confirmPassword && touched.confirmPassword && (
							<ErrorText>{errors.confirmPassword}</ErrorText>
						)}
						<FormButton
							variant='contained'
							color='primary'
							disabled={isSubmitting}
							onClick={() => {
								Object.keys(errors).forEach(field => {
									setFieldTouched(field, true, false)
								})
							}}
							fullWidth>
							Zarejestruj się
						</FormButton>
					</StyledForm>
				)}
			</Formik>
			<CustomModal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				title='Witaj w EduFusion!'
				text='Od teraz możesz rezerwować lekcje i wspólnie z korepetytorami zdobywać wymarzone cele!'
				imageSrc={registerModalImg}
			/>
		</>
	)
}

export default RegisterForm
