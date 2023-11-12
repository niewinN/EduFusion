import React from 'react'
import {
	ForWhomContainer,
	Title,
	Description,
	// ForWhomPhoto,
} from '../../Assets/Styles/AboutUs/ForWhom.styles'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'

function ForWhom() {
	return (
		<>
			<ForWhomContainer>
				<Wrapper>
					<Title>Dla kogo są nasze korepetycje?</Title>
					<Description>
						Nasze korepetycje są dostosowane do różnych grup uczniów, obejmując
						uczniów szkół podstawowych, liceów oraz studentów na różnych
						poziomach edukacji. Dla uczniów szkół podstawowych i młodszych,
						oferujemy wsparcie w nauce, pomagając w zrozumieniu podstawowych
						koncepcji i tworzeniu silnych podstaw. Dla licealistów, nasze
						korepetycje stanowią okazję do pogłębienia wiedzy i przygotowania do
						egzaminów maturalnych. Dla studentów i osób uczących się na
						uczelniach wyższych, oferujemy wsparcie w zdobywaniu wiedzy
						specjalistycznej i przygotowywaniu się do egzaminów i projektów.
						Indywidualne podejście i dostosowanie materiału do potrzeb każdego
						ucznia są kluczowe w naszym podejściu. Naszym celem jest nie tylko
						pomóc w zdobyciu wiedzy, ale także inspirować do dalszego rozwoju
						naukowego i osiągania sukcesów w przyszłości.
					</Description>
					{/* <ForWhomPhoto></ForWhomPhoto> */}
				</Wrapper>
			</ForWhomContainer>
		</>
	)
}

export default ForWhom
