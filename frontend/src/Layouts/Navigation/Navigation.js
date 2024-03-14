import React, { useState } from "react"
import {
	Nav,
	NavTitle,
	NavList,
	NavLink,
	BurgerIcon,
	BurgerLine,
	NavMainContainer,
	NavRight,
	NavLinkLogin,
} from "../../Assets/Styles/UI/Navigation.styles"
import { Wrapper } from "../../Assets/Styles/GlobalStyles/wrapper"
import { useLogin } from "../../Context/LoginContext"

const Navigation = () => {
	const { isLoggedIn, user } = useLogin()
	const [showNav, setShowNav] = useState(false)

	const handleShowNav = () => {
		setShowNav(!showNav)
	}
	const navLinks = [
		{ path: "/tutors", text: "Korepetytorzy" },
		{ path: "/aboutus", text: "O nas" },
		{ path: "/contact", text: "Kontakt" },
		{
			path: isLoggedIn
				? user.role === "TUTOR"
					? "/tutor"
					: "/user"
				: "/login",
			text: isLoggedIn && user.firstName ? user.firstName : "Zaloguj",
		},
	]

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
								to={
									isLoggedIn
										? user.role === "TUTOR"
											? "/tutor"
											: "/user"
										: "/login"
								}
								onClick={handleShowNav}>
								{isLoggedIn && user.firstName ? user.firstName : "Zaloguj"}
							</NavLinkLogin>
						</li>
					</NavList>
					<NavRight>
						<BurgerIcon onClick={handleShowNav} $isExpanded={showNav}>
							{[1, 2, 3].map(num => (
								<BurgerLine key={num} className={showNav ? "active" : ""} />
							))}
						</BurgerIcon>
					</NavRight>
				</Nav>
			</Wrapper>
		</NavMainContainer>
	)
}

export default Navigation
