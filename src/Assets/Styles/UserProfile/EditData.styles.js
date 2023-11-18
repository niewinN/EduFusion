import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const EditDataContainer = styled.div`
	box-shadow: 0 2px 15px #646464;
	border-radius: 8px;
	padding-bottom: 15px;
	flex-basis: 20%;
	align-self: flex-start;
`

export const EditBox = styled.div`
	display: flex;
	margin: 15px;
`

export const EditLabel = styled.label`
	font-size: 1.5rem;
`

export const EditInput = styled.input`
	border: none;
	outline: none;
	font-size: 1.5rem;
	border-bottom: 2px solid ${theme.colors.secondary};
	padding: 5px 0;
`

export const LogoutBtnBox = styled.div`
	margin: 40px 15px 0 15px;
`

export const LogoutBtn = styled.button`
	width: 100%;
	padding: 5px 10px;
	border-radius: 8px;
	background-color: ${theme.colors.primary};
	border: none;
	color: #fff;
	font-size: 1.5rem;
`

export const EditBtn = styled.button`
	margin-left: 20px;
	padding: 5px 10px;
	border: none;
	background-color: ${theme.colors.primary};
	color: #fff;
	border-radius: 8px;
`

export const EditDataInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
`
