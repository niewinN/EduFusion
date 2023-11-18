import Navigation from './Layouts/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Tutors from './Pages/Tutors'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Footer from './Layouts/Footer/Footer'
import Main from './Pages/Main'
// import { AvailabilityProvider } from './Context/AvailabilityContext'
import { SelectedOptionsProvider } from './Context/SelectedOptionsContext'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { LoginProvider } from './Context/LoginContext'
import UserProfile from './Pages/UserProfile'

function App() {
	return (
		<>
			<SelectedOptionsProvider>
				<LoginProvider>
					{/* <AvailabilityProvider> */}
					<Navigation />
					<Routes>
						<Route path='/tutors' element={<Tutors />} />
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/' element={<Main />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/user' element={<UserProfile />} />
					</Routes>
					<Footer />
					{/* </AvailabilityProvider> */}
				</LoginProvider>
			</SelectedOptionsProvider>
		</>
	)
}

export default App
