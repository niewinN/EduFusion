import React, { useEffect, useState } from 'react'
import FilterPanel from '../Components/Tutors/FilterPanel/FilterPanel'
import TutorCards from '../Components/Tutors/TutorCards/TutorCards'
import { useSelectedOptions } from '../Context/SelectedOptionsContext'
import axios from 'axios'
import tutor1 from '../Assets/Images/Main/tutor1.png'
import tutor2 from '../Assets/Images/Main/tutor2.png'
import tutor3 from '../Assets/Images/Main/tutor3.png'
import tutor4 from '../Assets/Images/Main/tutor4.png'
import tutor5 from '../Assets/Images/Main/tutor5.png'
import tutor6 from '../Assets/Images/Main/tutor6.png'
import tutor7 from '../Assets/Images/Main/tutor7.png'
import tutor8 from '../Assets/Images/Main/tutor8.png'

function Tutors() {
	const [tutors, setTutors] = useState([])
	const { selectedOptions } = useSelectedOptions()

	useEffect(() => {
		axios
			.get('http://localhost:4001/tutors') // Zmienić na właściwy URL
			.then(response => {
				const tutorsWithImages = response.data.map(tutor => {
					switch (tutor.img) {
						case 'tutor1.jpg':
							return { ...tutor, img: tutor1 }
						case 'tutor2.jpg':
							return { ...tutor, img: tutor2 }
						case 'tutor3.jpg':
							return { ...tutor, img: tutor3 }
						case 'tutor4.jpg':
							return { ...tutor, img: tutor4 }
						case 'tutor5.jpg':
							return { ...tutor, img: tutor5 }
						case 'tutor6.jpg':
							return { ...tutor, img: tutor6 }
						case 'tutor7.jpg':
							return { ...tutor, img: tutor7 }
						case 'tutor8.jpg':
							return { ...tutor, img: tutor8 }

						default:
							return tutor
					}
				})

				setTutors(tutorsWithImages)
			})
			.catch(error => {
				console.error('Błąd podczas pobierania danych:', error)
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
