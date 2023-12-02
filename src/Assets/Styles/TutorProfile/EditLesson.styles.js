import styled from 'styled-components'
import theme from '../GlobalStyles/theme'

export const EditLessonContainer = styled.div`
	box-shadow: 0 2px 15px #646464;
	border-radius: 8px;
	/* padding: 15px; */
	margin: 20px 0;
	background-color: white;
`

export const EditLessonBox = styled.div`
	padding: 15px;
`

export const EditDataInfoBox = styled.div`
	margin-bottom: 15px;
	/* display: flex; */
	/* justify-content: space-around; */
`

export const EditChangeBox = styled.div`
	/* display: flex; */
`
export const EditTextarea = styled.textarea`
	max-width: 100%;
	min-width: 100%;
	min-height: 70px;
	padding: 5px;
	resize: none;
	margin-top: 10px;
`

export const EditChange = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	margin-bottom: 10px;
`

export const EditGroup = styled.div`
	margin-bottom: 15px;
`

export const EditLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 5px;
	padding-bottom: 3px;
	color: ${theme.colors.secondary};
	border-bottom: 2px solid ${theme.colors.primary};
	/* font-weight: bold; */
`

export const EditInput = styled.input`
	border: none;
	outline: none;
	border-bottom: 2px solid ${theme.colors.secondary};
	border-radius: 4px;
	padding: 5px 10px;
	font-size: 1rem;
`

export const EditSelect = styled.select`
	border: 2px solid ${theme.colors.secondary};
	border-radius: 4px;
	padding: 5px 10px;
	font-size: 1.2rem;
	/* margin-top: 10px; */
	cursor: pointer;
`

export const EditSelectLast = styled(EditSelect)`
	margin-top: 10px;
`

export const EditButton = styled.button`
	padding: 10px 15px;
	/* font-size: 15px; */
	/* max-width: 60px; */
	min-width: 65px;
	/* text-align: center; */
	border: none;
	background-color: ${theme.colors.primary};
	color: #fff;
	border-radius: 8px;
	/* margin-left: 10p?x; */
	/* margin */
	/* margin: 5px 0; */
	cursor: pointer;
`

export const EditButtonDown = styled(EditButton)`
	width: 100%;
	padding: 5px 10px;
	font-size: 15px;
`

export const ErrorMsg = styled.p`
	color: red;
	font-size: 1.2rem;
`

// export const EditBtnBox = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `
