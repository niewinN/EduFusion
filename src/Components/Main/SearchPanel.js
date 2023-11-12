import React, { useState } from 'react'
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

registerLocale('pl', pl)
setDefaultLocale('pl')

function SearchPanel() {
	const [startDate, setStartDate] = useState(null)

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
							<SearchSelect>
								<SearchOption>- Wybierz przedmiot -</SearchOption>
								<SearchOption>Matematyka</SearchOption>
								<SearchOption>Fizyka</SearchOption>
								<SearchOption>Chemia</SearchOption>
								<SearchOption>Geografia</SearchOption>
								<SearchOption>Język angielski</SearchOption>
								<SearchOption>Język niemiecki</SearchOption>
								<SearchOption>Biologia</SearchOption>
							</SearchSelect>
							<SearchSelect>
								<SearchOption>- Wybierz poziom nauki -</SearchOption>
								<SearchOption>Szkoła podstawowa</SearchOption>
								<SearchOption>Szkoła ponadpodstawowa</SearchOption>
							</SearchSelect>
							<SearchSelect>
								<SearchOption>- Wybierz tryb nauki -</SearchOption>
								<SearchOption>Zdalnie</SearchOption>
								<SearchOption>Stacjonarnie</SearchOption>
							</SearchSelect>
							<SearchSelect>
								<SearchOption>
									- Wybierz miasto(* nauka stacjonarna) -
								</SearchOption>
								<SearchOption>Warszawa</SearchOption>
								<SearchOption>Kraków</SearchOption>
								<SearchOption>Gdańsk</SearchOption>
								<SearchOption>Wrocław</SearchOption>
								<SearchOption>Poznań</SearchOption>
								<SearchOption>Katowice</SearchOption>
							</SearchSelect>
							<SearchSelectDate>
								<DatePicker
									selected={startDate}
									onChange={date => setStartDate(date)}
									dateFormat='d MMMM yyyy'
									placeholderText='- Wybierz dzień korepetycji -'
									wrapperClassName='datePicker'
									locale='pl'
									minDate={new Date()}
									customInput={<input inputMode='none' />}
									withPortal
								/>
							</SearchSelectDate>

							<SearchBtn>Wyszukaj korepetytora</SearchBtn>
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
