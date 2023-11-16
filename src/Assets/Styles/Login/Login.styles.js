import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../GlobalStyles/theme'

export const LoginTitle = styled.p``

export const LoginText = styled.p`
	margin-bottom: 5px;
`

export const LoginLink = styled(Link)`
	color: ${theme.colors.secondary};
	font-weight: bold;
	font-size: 1.5rem;
`

export const LoginToRegister = styled.div`
	margin-top: 30px;
	text-align: center;
	font-size: 1.4rem;
`
