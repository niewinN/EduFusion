import React from 'react'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	ContactContainer,
	ContactBox,
	Form,
	FormBox,
	FormInput,
	FormLabel,
	FormTitle,
	ContactImg,
	ContactImgBox,
	FormBtn,
	FormTextarea,
} from '../../Assets/Styles/Contact/ContactForm.styles'
import contactPhoto from '../../Assets/Images/Contact/contact_form.png'

function ContactForm() {
	return (
		<ContactContainer>
			<Wrapper>
				<ContactBox>
					<Form>
						<FormTitle>Skontaktuj się!</FormTitle>
						<FormBox>
							<FormLabel>Imię</FormLabel>
							<FormInput></FormInput>
						</FormBox>
						<FormBox>
							<FormLabel>Imię</FormLabel>
							<FormInput></FormInput>
						</FormBox>
						<FormBox>
							<FormLabel>Imię</FormLabel>
							<FormInput></FormInput>
						</FormBox>
						<FormBox>
							<FormLabel>Imię</FormLabel>
							<FormTextarea></FormTextarea>
						</FormBox>
						<FormBtn>Wyślij</FormBtn>
					</Form>
					<ContactImgBox>
						<ContactImg src={contactPhoto}></ContactImg>
					</ContactImgBox>
				</ContactBox>
			</Wrapper>
		</ContactContainer>
	)
}

export default ContactForm
