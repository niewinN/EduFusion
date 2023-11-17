import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../GlobalStyles/theme'

export const NavMainContainer = styled.div`
	/* position: fixed; */
	/* top: 0; */
	/* left: 0; */
	width: 100%;
	z-index: 9999;
	/* margin-bottom: 30px; */
	${props =>
		props.isScrolling &&
		`
    box-shadow: 0 0 15px ${theme.colors.primary};
  `}
	background-color: ${theme.colors.primary};
`

export const NavContainer = styled.div`
	/* max-width: 1260px;
	margin: 0 auto;
	width: 100%; */
`

export const Nav = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: ${theme.colors.primary};
	color: #fff;
	height: 8vh;
	margin: 0 auto;
	width: 100%;

	@media (min-width: 768px) {
		height: 82px;
	}
`

export const NavTitle = styled.a`
	font-weight: bold;
	text-decoration: none;
	font-size: 2.6rem;
	color: white;

	@media (min-width: 1024px) {
		font-size: 3.5rem;
	}
`

export const NavList = styled.ul`
	position: fixed;
	list-style: none;
	right: 0;
	top: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: ${props =>
		props.$showNav ? 'translateX(0)' : 'translateX(100%)'};
	backdrop-filter: blur(20px);
	background-color: rgba(120, 173, 219, 0.6);
	z-index: 99999;
	transition: 0.3s;

	@media (min-width: 768px) {
		position: absolute;
		height: 82px;
		width: 75%;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		transform: translateX(0);
		overflow: hidden;
		backdrop-filter: blur(0);
		z-index: 0;
		transition: 0.3s;
	}
`

export const NavLink = styled(Link)`
	position: relative;
	display: block;
	padding: 1em 2em;
	font-size: 1.8rem;
	color: white;
	text-decoration: none;
	font-weight: bold;
	transition: 0.3s;
	overflow: hidden;
	color: ${theme.colors.secondary};

	@media (min-width: 768px) {
		font-weight: normal;
		color: #fff;
	}

	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`

export const NavLinkLogin = styled(NavLink)`
	background-color: ${theme.colors.secondary};
	border-radius: 8px;
	padding: 0.5em 1em;
	margin: 0em 1em;
	color: #fff;
`

export const NavRight = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 2%;
	transition: color 0.3s;

	&:hover {
		color: ${theme.colors.lightGray};
	}
`

export const BurgerIcon = styled.button`
	display: flex;
	position: ${props => (props.$isExpanded ? 'fixed' : 'block')};
	top: 20px;
	right: 2%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding-left: 1em;
	z-index: 999999;

	@media (min-width: 768px) {
		display: none;
	}
`

export const BurgerLine = styled.div`
	height: 0.3em;
	margin: 0.3em;
	background-color: white;
	transition: transform 0.3s, margin 0.3s, opacity 0.3s, width 0.3s;

	&:nth-child(1) {
		width: 3em;
	}

	&:nth-child(2) {
		width: 2.25em;
	}

	&:nth-child(3) {
		width: 1.5em;
	}

	&.active:nth-child(1) {
		transform: rotate(405deg) translate(0.25em, 0.35em);
		margin: 0;
	}

	&.active:nth-child(2) {
		opacity: 0;
	}

	&.active:nth-child(3) {
		transform: rotate(-405deg) translate(0.5em, -0.6em);
		width: 3em;
		margin: 0;
	}
`
