import React from "react"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
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
} from "../../Assets/Styles/Main/Instructions.styles"
import instructionImg from "../../Assets/Images/Main/instructionImg.png"
import { instructionsData } from "../../constants/instructionsData"

function Instructions(props) {
	return (
		<InstructionContainer>
			<Wrapper>
				<Title>Umów zajęcia kilkoma kliknięciami!</Title>
				<InstructionSection>
					<InstructionBoxes>
						{instructionsData.map((instruction, index) => (
							<InstructionBox key={index}>
								<InstructionNrBox $isSecondBox={index === 1}>
									<InstructionNr>{instruction.nr}</InstructionNr>
								</InstructionNrBox>
								<InstructionTextBox>
									<InstructionTitle>{instruction.title}</InstructionTitle>
									<InstructionText>{instruction.text}</InstructionText>
								</InstructionTextBox>
							</InstructionBox>
						))}
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
