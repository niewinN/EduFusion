import React from 'react'
import {
	RegisterImg,
	RegisterImgBox,
	RegisterSection,
	RegisterBox,
	RegisterFormBox,
	FormTitle,
} from '../Assets/Styles/Register/Register.styles'
import {
	LoginText,
	LoginLink,
	LoginToRegister,
} from '../Assets/Styles/Login/Login.styles'
import { Wrapper } from '../Assets/Styles/GlobalStyles/wrapper'
import loginImg from '../Assets/Images/Register/registerImg.png'
import LoginForm from '../Components/Login/LoginForm'

function Login() {
	return (
		<RegisterSection>
			<Wrapper>
				<RegisterBox>
					<RegisterImgBox>
						<RegisterImg src={loginImg}></RegisterImg>
					</RegisterImgBox>
					<RegisterFormBox>
						<FormTitle>Zaloguj się!</FormTitle>
						<LoginForm />
						<LoginToRegister>
							<LoginText>Nie masz jeszcze konta?</LoginText>
							<LoginLink to='/register'>Zarejestruj się</LoginLink>
						</LoginToRegister>
					</RegisterFormBox>
				</RegisterBox>
			</Wrapper>
		</RegisterSection>
	)
}

export default Login
