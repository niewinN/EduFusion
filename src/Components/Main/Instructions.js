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

function Instructions() {
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
							<InstructionNrBox isSecondBox>
								<InstructionNr>2</InstructionNr>
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
							<InstructionNrBox>
								<InstructionNr>3</InstructionNr>
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
