import React from 'react'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import {
	InstructionBox,
	InstructionBoxes,
	InstructionContainer,
	InstructionImg,
	InstructionImgBox,
	InstructionNr,
	InstructionSection,
	InstructionText,
	InstructionTextBox,
	InstructionTitle,
	Title,
	InstructionNrBox,
} from '../../Assets/Styles/Main/Instructions.styles'
import instructionImg from '../../Assets/Images/Main/instructionImg.png'

function Instructions(props) {
	return (
		<InstructionContainer>
			<Wrapper>
				<Title>Umów zajęcia kilkoma kliknięciami!</Title>
				<InstructionSection>
					<InstructionBoxes>
						<InstructionBox>
							<InstructionNrBox>
								<InstructionNr>1</InstructionNr>
							</InstructionNrBox>
							<InstructionTextBox>
								<InstructionTitle>
									Wypełnij podstawowe kryteria rezerwacji
								</InstructionTitle>
								<InstructionText>
									Skorzystaj z naszej wyszukiwarki uzupełniając, przedmiot,
									poziom i tryb nauki, dzień korepetycji oraz ewentualnie miasto
									w przypadku zajęć stacjonarnych.
								</InstructionText>
							</InstructionTextBox>
						</InstructionBox>
						<InstructionBox>
							<InstructionNrBox isSecondBox={props.isSecondBox}>
								<InstructionNr>2</InstructionNr>
							</InstructionNrBox>
							<InstructionTextBox>
								<InstructionTitle>
									Wybierz swojego korepetytora
								</InstructionTitle>
								<InstructionText>
									Z listy dostępnych korepetytorów wybierz nauczyciela
									najbardziej pasującego do twoich wymagań.
								</InstructionText>
							</InstructionTextBox>
						</InstructionBox>
						<InstructionBox>
							<InstructionNrBox>
								<InstructionNr>3</InstructionNr>
							</InstructionNrBox>
							<InstructionTextBox>
								<InstructionTitle>Zarezerwuj korepetycje</InstructionTitle>
								<InstructionText>
									Po dokonaniu wyboru nauczyciela kliknij przycisk zarezerwuj,
									żeby potwierdzić korepetycję. Korepetytor skontaktuję się z
									tobą najszybciej jak będzie mógł i omówi telefonicznie
									szczegóły spotkania oraz formę rozliczania za zajęcia.
								</InstructionText>
							</InstructionTextBox>
						</InstructionBox>
					</InstructionBoxes>
					<InstructionImgBox>
						<InstructionImg src={instructionImg}></InstructionImg>
					</InstructionImgBox>
				</InstructionSection>
			</Wrapper>
		</InstructionContainer>
	)
}

export default Instructions
