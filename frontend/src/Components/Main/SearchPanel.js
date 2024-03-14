import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
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
} from "../../Assets/Styles/Main/SearchPanel.styles"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import pl from "date-fns/locale/pl"
import searchPanelImg from "../../Assets/Images/Main/searchPanelImg.png"
import SelectComponent from "./SelectComponent"
import { baseSelectOptions } from "../../Assets/Files/optionsData"
import DatePickerComponent from "./DatePickerComponent"
import CustomModal from "../../Layouts/UI/CustomModal"
import filtersModalImg from "../../Assets/Images/UI/filterImg.png"
import { useSearchPanel } from "../../hooks/useSearchPanel"

registerLocale("pl", pl)
setDefaultLocale("pl")

function SearchPanel() {
	const {
		startDate,
		tutoringMode,
		modalOpen,
		setModalOpen,
		handleChange,
		handleDateChange,
		handleSearch,
	} = useSearchPanel()
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
										{ value: "", label: "- Wybierz przedmiot -" },
										...baseSelectOptions.subject,
									]}
									styleType='search'
									onChange={event => handleChange("subject", event)}
								/>
								<SelectComponent
									options={[
										{ value: "", label: "- Wybierz poziom nauki -" },
										...baseSelectOptions.level,
									]}
									styleType='search'
									onChange={event => handleChange("level", event)}
								/>
								<SelectComponent
									options={[
										{ value: "", label: "- Wybierz tryb nauki -" },
										...baseSelectOptions.mode,
									]}
									styleType='search'
									onChange={event => handleChange("mode", event)}
								/>
								<SelectComponent
									options={[
										{
											value: "",
											label: "- Wybierz miasto *(nauka stacjonarna) -",
										},
										...baseSelectOptions.city,
									]}
									styleType='search'
									onChange={event => handleChange("city", event)}
									disabled={tutoringMode === "zdalnie"}
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
