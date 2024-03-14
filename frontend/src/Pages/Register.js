import {
	RegisterBox,
	RegisterImg,
	RegisterImgBox,
	RegisterSection,
	RegisterFormBox,
	FormTitle,
} from "../Assets/Styles/Register/Register.styles"
import { Wrapper } from "../Assets/Styles/GlobalStyles/wrapper"
import RegisterForm from "../Components/Register/RegisterForm"
import registerImg from "../Assets/Images/Register/registerImg.png"

function Register() {
	return (
		<RegisterSection>
			<Wrapper>
				<RegisterBox>
					<RegisterImgBox>
						<RegisterImg src={registerImg}></RegisterImg>
					</RegisterImgBox>
					<RegisterFormBox>
						<FormTitle>Utwórz nowe konto!</FormTitle>
						<RegisterForm />
					</RegisterFormBox>
				</RegisterBox>
			</Wrapper>
		</RegisterSection>
	)
}

export default Register
