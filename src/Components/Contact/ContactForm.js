import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
	ErrorMessage,
	StyledToastContainer,
} from '../../Assets/Styles/Contact/ContactForm.styles'
import contactPhoto from '../../Assets/Images/Contact/contact_form.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const validationSchema = Yup.object({
	imie: Yup.string().required('Imię jest wymagane'),
	nazwisko: Yup.string().required('Nazwisko jest wymagane'),
	email: Yup.string()
		.email('Nieprawidłowy adres e-mail')
		.required('E-mail jest wymagany'),
	wiadomosc: Yup.string().required('Wiadomość jest wymagana'),
})

function ContactForm() {
	// eslint-disable-next-line
	const [isSubmitting, setIsSubmitting] = useState(false)
	const formik = useFormik({
		initialValues: {
			imie: '',
			nazwisko: '',
			email: '',
			wiadomosc: '',
		},
		validationSchema,
		onSubmit: values => {
			console.log(values)
			toast.success('Formularz wysłany pomyślnie!')
			setIsSubmitting(false)
		},
	})

	const handleFormSubmit = async event => {
		event.preventDefault()
		setIsSubmitting(true)

		const errors = await formik.validateForm()
		if (Object.keys(errors).length > 0) {
			const errorElements = Object.values(errors).map((error, index) => (
				<ErrorMessage key={index}>{error}</ErrorMessage>
			))

			toast.error(<div>{errorElements}</div>)
			setIsSubmitting(false)
		} else {
			formik.handleSubmit()
		}
	}

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
						<FormBtn type='submit'>Wyślij</FormBtn>
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
