import React, { useState, useEffect, useContext } from 'react'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import {
	CardBox,
	// CardCalendar,
	CardPhotoBox,
	CardPrice,
	CardPriceAndBtn,
	CardReserveBtn,
	InfoBtn,
	InfoText,
	TutorDesc,
	TutorName,
	TutorSubject,
	CardRight,
	CardRightTitle,
} from '../../../../Assets/Styles/Tutors/TutorReserveCard.styles'
import ScheduleCalendar from './ScheduleCalendar'
import axios from 'axios'
import { SelectedOptionsContext } from '../../../../Context/SelectedOptionsContext'

function TutorReserveCard({
	img,
	name,
	desc,
	subject,
	price,
	selectedTutorId,
}) {
	const [selectedTutor, setSelectedTutor] = useState(null)
	const { selectedOptions } = useContext(SelectedOptionsContext)
	const selectedDate = selectedOptions.date

	useEffect(() => {
		console.log('selectedTutorId:', selectedTutorId)
		const fetchTutorData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/tutors.json`)
				// setSelectedTutor(response.data)
				setSelectedTutor(
					response.data.find(tutor => tutor.id === selectedTutorId)
				)
			} catch (error) {
				console.error('Błąd podczas pobierania danych nauczyciela:', error)
			}
		}

		fetchTutorData()
	}, [selectedTutorId])

	return (
		<CardBox>
			<CardPhotoBox img={img}>
				<InfoBtn icon={faCircleQuestion}></InfoBtn>
				<InfoText>
					<TutorName>{name}</TutorName>
					<TutorDesc>{desc}</TutorDesc>
					<TutorSubject>{subject}</TutorSubject>
				</InfoText>
			</CardPhotoBox>
			<CardRight>
				<CardRightTitle>
					Kliknij w wolny termin i zarezerwuj zajęcia!
				</CardRightTitle>
				{/* <ScheduleCalendar selectedTutor={selectedTutor} /> */}
				{/* {selectedDate && <ScheduleCalendar selectedTutor={selectedTutor} />} */}
				<ScheduleCalendar
					selectedTutor={selectedTutor}
					selectedDate={selectedDate || new Date()}
				/>

				<CardPriceAndBtn>
					<CardPrice>{price} / 60 min</CardPrice>
					<CardReserveBtn>Zarezerwuj</CardReserveBtn>
				</CardPriceAndBtn>
			</CardRight>
		</CardBox>
	)
}

export default TutorReserveCard
