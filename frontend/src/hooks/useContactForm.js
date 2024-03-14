// hooks/useContactForm.js
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { ErrorMessage } from "../Assets/Styles/Contact/ContactForm.styles"

const validationSchema = Yup.object({
	imie: Yup.string().required("Imię jest wymagane"),
	nazwisko: Yup.string().required("Nazwisko jest wymagane"),
	email: Yup.string()
		.email("Nieprawidłowy adres e-mail")
		.required("E-mail jest wymagany"),
	wiadomosc: Yup.string().required("Wiadomość jest wymagana"),
})

export const useContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const formik = useFormik({
		initialValues: {
			imie: "",
			nazwisko: "",
			email: "",
			wiadomosc: "",
		},
		validationSchema,
		onSubmit: values => {
			console.log(values)
			toast.success("Formularz wysłany pomyślnie!")
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

	return {
		formik,
		handleFormSubmit,
		isSubmitting,
	}
}
