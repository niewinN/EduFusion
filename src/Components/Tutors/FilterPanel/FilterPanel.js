import React, { useContext } from 'react'
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
import { baseSelectOptions } from '../../../Assets/Files/optionsData'
import { useSelectedOptions } from '../../../Context/SelectedOptionsContext'

function FilterPanel() {
	const { selectedOptions } = useSelectedOptions()
	const tilesData = [
		{
			id: 'subject',
			icon: faBook,
			options: baseSelectOptions.subject,
		},
		{
			id: 'level',
			icon: faStairs,
			options: baseSelectOptions.level,
		},
		{
			id: 'mode',
			icon: faHouse,
			options: baseSelectOptions.mode,
		},
		{
			id: 'city',
			icon: faCity,
			options: baseSelectOptions.city,
		},
		{
			id: 'date',
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
						type={tile.type}
						options={tile.options}
						id={tile.id}
						selectedValue={
							tile.id === 'date'
								? selectedOptions.date
								: selectedOptions[tile.id]
						}
					/>
				))}
			</TilesContainer>
		</Wrapper>
	)
}

export default FilterPanel
