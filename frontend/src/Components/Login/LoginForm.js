import React, { useState } from "react"
import { Formik, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useLogin } from "../../Context/LoginContext"
import { useNavigate } from "react-router-dom"
import {
	FormButton,
	StyledTextField,
	ErrorText,
	StyledForm,
} from "../../Assets/Styles/Login/LoginForm.styles"

const validationSchema = Yup.object({
	email: Yup.string()
		.required("E-mail jest wymagany")
		.matches(
			/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
			"Podaj poprawny adres e-mail"
		),
	password: Yup.string().required("Hasło jest wymagane"),
})

function LoginForm() {
	const navigate = useNavigate()
	const { onLoginSuccess } = useLogin()
	const [loginError, setLoginError] = useState("")

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={validationSchema}
			validateOnBlur={false}
			validateOnChange={true}
			// validateOnChange={formSubmitted}
			onSubmit={(values, { setSubmitting }) => {
				axios
					.post("http://localhost:8080/authenticate", values)
					.then(response => {
						console.log(response.data)
						const token = response.data.jwt
						localStorage.setItem("token", token)
						onLoginSuccess(token)
						navigate("/")
					})
					.catch(error => {
						setLoginError("E-mail lub hasło jest nieprawidłowe")
						console.error("Błąd podczas logowania:", error)
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
					{loginError && <ErrorText>{loginError}</ErrorText>}{" "}
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
