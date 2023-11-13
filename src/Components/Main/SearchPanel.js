import React, { useState, useContext } from 'react'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	SearchBox,
	SearchBtn,
	SearchOption,
	SearchPanelBox,
	SearchPanelContainer,
	SearchPanelTitle,
	SearchPhoto,
	SearchPhotoBox,
	SearchSelect,
	SearchSelectDate,
	SearchSecondContainer,
} from '../../Assets/Styles/Main/SearchPanel.styles'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pl from 'date-fns/locale/pl'
import searchPanelImg from '../../Assets/Images/Main/searchPanelImg.png'
import { SelectedOptionsContext } from '../../Context/SelectedOptionsContext'
import { useNavigate } from 'react-router-dom'

registerLocale('pl', pl)
setDefaultLocale('pl')

const selectOptions = [
	{
		id: 'subject',
		options: [
			'- Wybierz przedmiot -',
			'matematyka',
			'Fizyka',
			'Chemia',
			'Geografia',
			'Język angielski',
			'Język niemiecki',
			'Biologia',
		],
	},
	{
		id: 'level',
		options: [
			'- Wybierz poziom nauki -',
			'Szkoła podstawowa',
			'Szkoła ponadpodstawowa',
		],
	},
	{
		id: 'mode',
		options: ['- Wybierz tryb nauki -', 'Zdalnie', 'Stacjonarnie'],
	},
	{
		id: 'city',
		options: [
			'- Wybierz miasto(* nauka stacjonarna) -',
			'Warszawa',
			'Kraków',
			'Gdańsk',
			'Wrocław',
			'Poznań',
			'Katowice',
		],
	},
]

function SearchPanel() {
	const [startDate, setStartDate] = useState(null)
	const { setSelectedOptions } = useContext(SelectedOptionsContext)
	const [formData, setFormData] = useState({
		subject: '',
		level: '',
		mode: '',
		city: '',
		date: null,
	})
	const navigate = useNavigate()

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleDateChange = date => {
		setFormData(prevState => ({
			...prevState,
			date: date,
		}))
	}

	const handleSearch = () => {
		setSelectedOptions(formData)
		// Nawigacja do FilterPanel, jeśli to konieczne
		navigate('/tutors')
	}

	return (
		<SearchPanelContainer>
			<Wrapper>
				<SearchPanelBox>
					<SearchPanelTitle>
						Witaj w naszej społeczności!
						<br /> Dołącz do nas i osiągaj wymarzone sukcesy w nauce.
					</SearchPanelTitle>
					<SearchSecondContainer>
						<SearchBox>
							{selectOptions.map(select => (
								<SearchSelect
									name={select.id}
									onChange={handleChange}
									key={select.id}>
									{select.options.map(option => (
										<SearchOption key={option} value={option}>
											{option}
										</SearchOption>
									))}
								</SearchSelect>
							))}
							<SearchSelectDate>
								<DatePicker
									// selected={startDate}
									// onChange={date => setStartDate(date)}
									selected={formData.date}
									onChange={handleDateChange}
									dateFormat='d MMMM yyyy'
									placeholderText='- Wybierz dzień korepetycji -'
									wrapperClassName='datePicker'
									locale='pl'
									minDate={new Date()}
									customInput={<input inputMode='none' />}
									withPortal
								/>
							</SearchSelectDate>

							<SearchBtn onClick={handleSearch}>
								Wyszukaj korepetytora
							</SearchBtn>
						</SearchBox>
						<SearchPhotoBox>
							<SearchPhoto src={searchPanelImg}></SearchPhoto>
						</SearchPhotoBox>
					</SearchSecondContainer>
				</SearchPanelBox>
			</Wrapper>
		</SearchPanelContainer>
	)
}

export default SearchPanel
