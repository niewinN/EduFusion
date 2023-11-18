import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
	// NavContainer,
	Nav,
	NavTitle,
	NavList,
	NavLink,
	BurgerIcon,
	BurgerLine,
	NavMainContainer,
	NavRight,
	NavLinkLogin,
} from '../../Assets/Styles/UI/Navigation.styles'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'
import { useLogin } from '../../Context/LoginContext'

const Navigation = () => {
	const { isLoggedIn, userName } = useLogin()
	const [showNav, setShowNav] = useState(false)
	// const [isLoggedIn, setIsLoggedIn] = useState(false)
	// const [userName, setUserName] = useState('')

	const handleShowNav = () => {
		setShowNav(!showNav)
	}

	// const handleLoginSuccess = user => {
	// 	setIsLoggedIn(true)
	// 	setUserName(user.name) // Załóżmy, że obiekt user zawiera pole name
	// }

	return (
		<NavMainContainer>
			<Wrapper>
				<Nav>
					<NavTitle href='/'>EduFusion</NavTitle>
					<NavList $showNav={showNav}>
						<li>
							<NavLink to='/tutors' onClick={handleShowNav}>
								Korepetytorzy
							</NavLink>
						</li>
						<li>
							<NavLink to='/aboutus' onClick={handleShowNav}>
								O nas
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' onClick={handleShowNav}>
								Kontakt
							</NavLink>
						</li>
						<li>
							<NavLinkLogin
								to={isLoggedIn ? '/user' : '/login'}
								onClick={handleShowNav}>
								{isLoggedIn ? userName : 'Zaloguj'}
							</NavLinkLogin>
						</li>
					</NavList>
					<NavRight>
						<BurgerIcon onClick={handleShowNav} $isExpanded={showNav}>
							{[1, 2, 3].map(num => (
								<BurgerLine key={num} className={showNav ? 'active' : ''} />
							))}
						</BurgerIcon>
					</NavRight>
				</Nav>
			</Wrapper>
		</NavMainContainer>
	)
}

export default Navigation
