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
} from '../../Assets/Styles/UI/Navigation.styles'
import { Wrapper } from '../../Assets/Styles/GlobalStyles/wrapper'

const Navigation = () => {
	const [showNav, setShowNav] = useState(false)

	const handleShowNav = () => {
		setShowNav(!showNav)
	}

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
