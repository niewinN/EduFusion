import React from 'react'
import Tile from './Tile/Tile'
import {
	faBook,
	faHouse,
	faCity,
	faCalendarDays,
	faStairs,
} from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from '../../../Assets/Styles/GlobalStyles/wrapper'
import { TilesContainer } from '../../../Assets/Styles/Tutors/FilterPanel.styles'

function FilterPanel() {
	const tilesData = [
		{
			icon: faBook,
			// text: 'Przedmiot',
			options: [
				{ value: 'przedmiot', label: '- Przedmiot -' },
				{ value: 'matematyka', label: 'Matematyka' },
				{ value: 'fizyka', label: 'Fizyka' },
				{ value: 'chemia', label: 'Chemia' },
				{ value: 'geografia', label: 'Geografia' },
				{ value: 'angielski', label: 'Język angielski' },
				{ value: 'niemiecki', label: 'Język niemiecki' },
				{ value: 'biologia', label: 'Biologia' },
			],
		},
		{
			icon: faStairs,
			// text: '-',
			options: [
				{ value: 'poziom', label: '- Poziom nauki -' },
				{ value: 'podstawowa', label: 'Szkoła podstawowa' },
				{ value: 'ponadpodstawowa', label: 'Szkoła ponadpodstawowa' },
			],
		},
		{
			icon: faHouse,
			// text: 'Prz',
			options: [
				{ value: 'tryb', label: '- Tryb nauki -' },
				{ value: 'zdalnie', label: 'Zdalnie' },
				{ value: 'stacjonarnie', label: 'Stacjonarnie' },
			],
		},
		{
			icon: faCity,
			// text: 'Przedmio',
			options: [
				{ value: 'miasto', label: ' - Miasto -' },
				{ value: 'warszawa', label: 'Warszawa' },
				{ value: 'krakow', label: 'Kraków' },
				{ value: 'gdansk', label: 'Gdańsk' },
				{ value: 'wroclaw', label: 'Wrocław' },
				{ value: 'poznan', label: 'Poznań' },
				{ value: 'katowice', label: 'Katowice' },
			],
		},
		{
			icon: faCalendarDays,
			type: 'date',
		},
	]

	return (
		<Wrapper>
			<TilesContainer>
				{tilesData.map((tile, index) => (
					<Tile
						key={index}
						icon={tile.icon}
						// text={tile.text}
						type={tile.type}
						options={tile.options}
					/>
				))}
			</TilesContainer>
		</Wrapper>
	)
}

export default FilterPanel
