import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import ParticlesBg from "../shared/ui/Particles"
import Navbar from "../widgets/Navbar"
import Footer from "../shared/ui/Footer"

function App() {
	const userData = useLoaderData()

	return (
		<React.StrictMode>
			<ParticlesBg />
			<Navbar isLoggedIn={userData ? true : false} />
			<Outlet />
			<Footer />
		</React.StrictMode>
	)
}

export default App
