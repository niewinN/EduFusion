import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CalendarWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	max-width: 600px;
	/* margin: auto; */
`

export const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;

	@media (min-width: 740px) {
		font-size: 1.4rem;
	}

	@media (min-width: 1024px) {
		font-size: 1.7rem;
	}
`

export const DateLabel = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`

export const FullDateLabel = styled.div`
	margin-bottom: 10px;
	white-space: nowrap;
`

export const TimeSlotsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;
`

export const TimeSlot = styled.div`
	padding: 5px 10px;
	background-color: ${props => (props.selected ? '#78ADDB' : 'e0e0e0')};
	border-radius: 5px;
	border: 1px solid #646464;
	box-shadow: 0 2px 15px #646464;
	cursor: pointer;
`
export const ShowMoreButton = styled.button`
	padding: 5px 10px;
	margin: 5px 0 15px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	background: none;
	width: 100%;
	color: #000;
	font-size: 1.2rem;
	outline: none;
`

export const MoreIcon = styled(FontAwesomeIcon)`
	margin-left: 5px;
`
