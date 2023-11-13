import Navigation from './Layouts/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Tutors from './Pages/Tutors'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Footer from './Layouts/Footer/Footer'
import Main from './Pages/Main'
import { AvailabilityProvider } from './Context/AvailabilityContext'
import { SelectedOptionsProvider } from './Context/SelectedOptionsContext'

function App() {
	return (
		<>
			<SelectedOptionsProvider>
				<AvailabilityProvider>
					<Navigation />
					<Routes>
						<Route path='/tutors' element={<Tutors />} />
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/' element={<Main />} />
					</Routes>
					<Footer />
				</AvailabilityProvider>
			</SelectedOptionsProvider>
		</>
	)
}

export default App
