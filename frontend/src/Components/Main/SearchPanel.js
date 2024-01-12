import React, { useState } from 'react'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import { useSelectedOptions } from '../../Context/SelectedOptionsContext'
import {
	SearchBox,
	SearchBtn,
	SearchPanelBox,
	SearchPanelContainer,
	SearchPanelTitle,
	SearchPhoto,
	SearchPhotoBox,
	SearchSelectDate,
	SearchSecondContainer,
} from '../../Assets/Styles/Main/SearchPanel.styles'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pl from 'date-fns/locale/pl'
import searchPanelImg from '../../Assets/Images/Main/searchPanelImg.png'
import SelectComponent from './SelectComponent'
import { baseSelectOptions } from '../../Assets/Files/optionsData'
import DatePickerComponent from './DatePickerComponent'
import { useNavigate } from 'react-router-dom'
// import FiltersModal from '../../Layouts/UI/FiltersModal'
import CustomModal from '../../Layouts/UI/CustomModal'
import filtersModalImg from '../../Assets/Images/UI/filterImg.png'

registerLocale('pl', pl)
setDefaultLocale('pl')

function SearchPanel() {
	const [startDate, setStartDate] = useState(null)
	const [tutoringMode, setTutoringMode] = useState('')
	const { selectedOptions, setSelectedOptions } = useSelectedOptions()
	const [modalOpen, setModalOpen] = useState(false)
	const navigate = useNavigate()

	const handleChange = (name, value) => {
		console.log('handleChange - name:', name, 'value:', value)
		const newValue = value instanceof Date ? value : value.target.value
		// Jeśli zmienia się tryb nauki na 'zdalnie', zresetuj miasto
		if (name === 'mode' && newValue.toLowerCase() === 'zdalnie') {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				city: '', // resetowanie miasta
				[name]: newValue.toLowerCase(),
			}))
		} else {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				[name]: newValue,
			}))
		}

		if (name === 'mode') {
			setTutoringMode(newValue.toLowerCase())
			console.log('Tutoring Mode set to:', newValue)
		}
	}

	const handleDateChange = date => {
		setStartDate(date)
		handleChange('date', date)
	}

	const isFormValid = () => {
		const { subject, level, mode, city, date } = selectedOptions
		return subject && level && mode && date && (mode !== 'stacjonarnie' || city)
	}

	const handleSearch = () => {
		if (isFormValid()) {
			navigate('/tutors')
		} else {
			// alert('Proszę wypełnić wszystkie wymagane pola.')
			setModalOpen(true)
		}
	}

	return (
		<>
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
									options={[
										{ value: '', label: '- Wybierz przedmiot -' },
										...baseSelectOptions.subject,
									]}
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
									disabled={tutoringMode === 'zdalnie'}
								/>
								<SearchSelectDate>
									<DatePickerComponent
										startDate={startDate}
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
			{/* <FiltersModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
			<CustomModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				title='Uzupełnij kryteria!'
				text='Musisz uzupełnić wszystkie potrzebne kryteria, aby móc wyszukać odpowiedniego korepetytora!'
				imageSrc={filtersModalImg}
			/>
		</>
	)
}

export default SearchPanel
