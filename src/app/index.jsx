import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { getUserData } from "../controllers/ReactRouterLoaders/loaders"
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
import "./ui/global.css"

const App = () => {
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

const RootRoute = {
	path: "/",
	id: "root",
	element: <App />,
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return null

		return userData
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
