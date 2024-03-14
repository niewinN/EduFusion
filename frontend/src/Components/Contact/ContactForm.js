import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
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
	StyledToastContainer,
} from "../../Assets/Styles/Contact/ContactForm.styles"
import contactPhoto from "../../Assets/Images/Contact/contact_form.png"
import "react-toastify/dist/ReactToastify.css"
import { useContactForm } from "../../hooks/useContactForm"

function ContactForm() {
	const { formik, handleFormSubmit, isSubmitting } = useContactForm()

	return (
		<ContactContainer>
			<Wrapper>
				<ContactBox>
					<Form onSubmit={handleFormSubmit} noValidate>
						<FormTitle>Skontaktuj się!</FormTitle>

						<FormBox>
							<FormLabel htmlFor='imie'>Imię</FormLabel>
							<FormInput
								id='imie'
								name='imie'
								type='text'
								onChange={formik.handleChange}
								value={formik.values.imie}
							/>
						</FormBox>
						<FormBox>
							<FormLabel htmlFor='nazwisko'>Nazwisko</FormLabel>
							<FormInput
								id='nazwisko'
								name='nazwisko'
								type='text'
								onChange={formik.handleChange}
								value={formik.values.nazwisko}
							/>
						</FormBox>
						<FormBox>
							<FormLabel htmlFor='email'>E-mail</FormLabel>
							<FormInput
								id='email'
								name='email'
								type='email'
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
						</FormBox>
						<FormBox>
							<FormLabel htmlFor='wiadomosc'>Wiadomość</FormLabel>
							<FormTextarea
								id='wiadomosc'
								name='wiadomosc'
								onChange={formik.handleChange}
								value={formik.values.wiadomosc}
							/>
						</FormBox>
						<FormBtn type='submit' disabled={isSubmitting}>
							{isSubmitting ? "Wysyłanie..." : "Wyślij"}
						</FormBtn>
					</Form>
					<ContactImgBox>
						<ContactImg src={contactPhoto} alt='Contact' />
					</ContactImgBox>
				</ContactBox>
			</Wrapper>
			<StyledToastContainer />
		</ContactContainer>
	)
}

export default ContactForm
