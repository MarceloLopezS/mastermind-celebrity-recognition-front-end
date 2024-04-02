import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { getUserData } from "../controllers/ReactRouterLoaders/loaders"
import { logOutUser } from "../controllers/ReactRouterActions/actions"
import ParticlesBg from "../shared/ui/Particles"
import Navbar from "../widgets/Navbar"
import Footer from "../shared/ui/Footer"
import "./ui/global.css"
import HomeRoute from "../pages/Home"
import RegisterRoute from "../pages/Register"
import EmailVerificationRoute from "../pages/EmailVerification"
import ForgotPasswordRoute from "../pages/ForgotPassword"
import PasswordResetRoute from "../pages/PasswordReset"
import FaceDetectionRoute from "../pages/FaceDetection"

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
	action: logOutUser,
	children: [
		HomeRoute,
		RegisterRoute,
		EmailVerificationRoute,
		ForgotPasswordRoute,
		PasswordResetRoute,
		FaceDetectionRoute
	]
}

export default RootRoute
