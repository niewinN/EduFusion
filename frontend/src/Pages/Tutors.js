import React, { useEffect, useState } from "react"
import FilterPanel from "../Components/Tutors/FilterPanel/FilterPanel"
import TutorCards from "../Components/Tutors/TutorCards/TutorCards"
import { useSelectedOptions } from "../Context/SelectedOptionsContext"
import axios from "axios"

function Tutors() {
	const [tutors, setTutors] = useState([])
	const { selectedOptions } = useSelectedOptions()

	useEffect(() => {
		axios
			.get(`http://localhost:8080/tutors`)
			.then(response => {
				const tutorsWithLocalImagePath = response.data.map(tutor => {
					return { ...tutor, img: `/images/${tutor.img}` }
				})

				setTutors(tutorsWithLocalImagePath)
			})
			.catch(error => {
				console.error("Błąd podczas pobierania danych:", error)
			})
	}, [])

	const filterTutors = selectedOptions => {
		return tutors.filter(tutor => {
			return (
				(!selectedOptions.subject ||
					tutor.subject === selectedOptions.subject) &&
				(!selectedOptions.level ||
					tutor.level.includes(selectedOptions.level)) &&
				(!selectedOptions.mode || tutor.mode.includes(selectedOptions.mode)) &&
				(!selectedOptions.city || tutor.city === selectedOptions.city)
			)
		})
	}

	return (
		<>
			<FilterPanel />
			<TutorCards filteredTutors={filterTutors(selectedOptions)} />
		</>
	)
}

export default Tutors
