import React, { useState } from 'react'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import { useSelectedOptions } from '../../Context/SelectedOptionsContext'
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
import SelectComponent from './SelectComponent'
import { baseSelectOptions } from '../../Assets/Files/optionsData'
import DatePickerComponent from './DatePickerComponent'
import { useNavigate } from 'react-router-dom'

registerLocale('pl', pl)
setDefaultLocale('pl')

function SearchPanel() {
	const [startDate, setStartDate] = useState(null)
	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
	const navigate = useNavigate()
	const handleChange = (name, value) => {
		const newValue = value instanceof Date ? value : value.target.value
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			[name]: newValue,
		}))
	}

	const handleDateChange = date => {
		setStartDate(date) // Aktualizacja lokalnego stanu
		handleChange('date', date) // Aktualizacja stanu w kontekście
	}

	const isFormValid = () => {
		// Sprawdź, czy wymagane pola są wypełnione
		const { subject, level, mode, city, date } = selectedOptions
		return subject && level && mode && date && (mode !== 'stacjonarnie' || city)
	}

	const handleSearch = () => {
		if (isFormValid()) {
			navigate('/tutors')
		} else {
			alert('Proszę wypełnić wszystkie wymagane pola.')
		}
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
							<SelectComponent
								// label='- Wybierz przedmiot -'
								options={[
									{ value: '', label: '- Wybierz przedmiot -' },
									...baseSelectOptions.subject,
								]}
								// options={baseSelectOptions.subject}
								styleType='search'
								onChange={event => handleChange('subject', event)}
							/>
							<SelectComponent
								options={[
									{ value: '', label: '- Wybierz poziom nauki -' },
									...baseSelectOptions.level,
								]}
								styleType='search'
								onChange={event => handleChange('level', event)}
							/>
							<SelectComponent
								options={[
									{ value: '', label: '- Wybierz tryb nauki -' },
									...baseSelectOptions.mode,
								]}
								styleType='search'
								onChange={event => handleChange('mode', event)}
							/>
							<SelectComponent
								options={[
									{
										value: '',
										label: '- Wybierz miasto *(nauka stacjonarna) -',
									},
									...baseSelectOptions.city,
								]}
								styleType='search'
								onChange={event => handleChange('city', event)}
							/>
							<SearchSelectDate>
								<DatePickerComponent
									startDate={startDate}
									// setStartDate={setStartDate}
									setStartDate={handleDateChange}
									dateName='- Wybierz dzień korepetycji -'
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
