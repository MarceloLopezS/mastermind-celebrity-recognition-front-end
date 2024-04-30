import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import checkUserAuthentication from "../features/CheckUserAuthentication"
import "./ui/global.css"
import ParticlesBg from "../shared/ui/Particles"
import Navbar from "../widgets/Navbar"
import Footer from "../shared/ui/Footer"
import LoginRoute from "../pages/Login"
import LogoutRoute from "../pages/Logout"
import RegisterRoute from "../pages/Register"
import EmailVerificationRoute from "../pages/EmailVerification"
import ForgotPasswordRoute from "../pages/ForgotPassword"
import PasswordResetRoute from "../pages/PasswordReset"
import FaceDetectionRoute from "../pages/FaceDetection"

const App = () => {
	const isAuthenticated = useLoaderData()

	return (
		<React.StrictMode>
			<ParticlesBg />
			<Navbar isLoggedIn={isAuthenticated} />
			<Outlet />
			<Footer />
		</React.StrictMode>
	)
}

const RootRoute = {
	path: "/",
	id: "root",
	element: <App />,
	loader: async () => {
		try {
			const data = await checkUserAuthentication()
			if (!data?.authenticated) return null

			return data?.authenticated
		} catch (err) {
			console.error(err)
			return null
		}
	},
	children: [
		{ index: true, ...LoginRoute },
		RegisterRoute,
		EmailVerificationRoute,
		ForgotPasswordRoute,
		PasswordResetRoute,
		FaceDetectionRoute,
		LogoutRoute
	]
}

export default RootRoute
