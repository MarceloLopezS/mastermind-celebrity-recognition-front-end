import React, { useContext, Suspense, useEffect } from "react"
import { useLoaderData, Await, Outlet, defer } from "react-router-dom"
import checkUserAuthentication from "@/features/CheckUserAuthentication"
import "./ui/global.css"
import StoreContextProvider, {
	StoreDispatchContext
} from "@/shared/state/store"
import { SET_USER_AUTH } from "@/shared/state/config/actions"
import ParticlesBg from "@/shared/ui/Particles"
import Navbar from "@/widgets/Navbar"
import Footer from "@/shared/ui/Footer"
import HomeRoute from "@/pages/Home"
import LoginRoute from "@/pages/Login"
import LogoutRoute from "@/pages/Logout"
import RegisterRoute from "@/pages/Register"
import EmailVerificationRoute from "@/pages/EmailVerification"
import ForgotPasswordRoute from "@/pages/ForgotPassword"
import PasswordResetRoute from "@/pages/PasswordReset"
import FaceDetectionRoute from "@/pages/FaceDetection"

const App = () => {
	const { data } = useLoaderData()
	const dispatch = useContext(StoreDispatchContext)

	return (
		<React.StrictMode>
			<ParticlesBg />
			<Suspense fallback={<Navbar isAuthLoading={true} />}>
				<Await
					resolve={data}
					errorElement={<Navbar isAuthLoading={false} isLoggedIn={false} />}
				>
					{data => {
						useEffect(() => {
							const action = {
								type: SET_USER_AUTH,
								payload: { isUserAuthenticated: data?.authenticated ?? false }
							}
							dispatch(action)
						}, [data?.authenticated])

						return (
							<Navbar isAuthLoading={false} isLoggedIn={data?.authenticated} />
						)
					}}
				</Await>
			</Suspense>
			<Outlet />
			<Footer />
		</React.StrictMode>
	)
}

const AppWithStore = () => {
	return (
		<StoreContextProvider>
			<App />
		</StoreContextProvider>
	)
}

const RootRoute = {
	path: "/",
	id: "root",
	element: <AppWithStore />,
	loader: async () => {
		const data = checkUserAuthentication()

		return defer({ data })
	},
	children: [
		{ index: true, ...HomeRoute },
		LoginRoute,
		RegisterRoute,
		EmailVerificationRoute,
		ForgotPasswordRoute,
		PasswordResetRoute,
		FaceDetectionRoute,
		LogoutRoute
	]
}

export default RootRoute
