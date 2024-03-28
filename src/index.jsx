import ReactDOM from "react-dom/client"
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	redirect
} from "react-router-dom"
import "./index.css"
import App from "./app"
import LogIn from "./pages/LogIn/LogIn"
import Register from "./pages/Register/Register"
import EmailVerification from "./pages/EmailVerification/EmailVerification"
import Error from "./pages/EmailVerification/Error/Error"
import InvalidToken from "./pages/EmailVerification/Error/InvalidToken/InvalidToken"
import ActivationSuccess from "./pages/EmailVerification/Success/ActivationSuccess"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import PasswordReset from "./pages/PasswordReset/PasswordReset"
import ResetSuccess from "./pages/PasswordReset/Success/ResetSuccess"
import FaceDetection from "./pages/FaceDetection/FaceDetection"
import NotFound from "./pages/NotFound/NotFound"
import {
	registerUser,
	loginUser,
	logOutUser,
	incrementEntry,
	forgotPassword,
	passwordReset
} from "./controllers/ReactRouterActions/actions"
import { getUserData } from "./controllers/ReactRouterLoaders/loaders"
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				id="root"
				element={<App />}
				action={logOutUser}
				loader={async () => {
					const userData = await getUserData()
					if (userData) {
						return userData
					} else {
						return null
					}
				}}
			>
				<Route
					index
					element={<LogIn />}
					action={loginUser}
					loader={async () => {
						const userData = await getUserData()
						if (userData) {
							return redirect("face-detection")
						} else {
							return null
						}
					}}
				/>

				<Route
					path="register"
					element={<Register />}
					action={registerUser}
					loader={async () => {
						const userData = await getUserData()
						if (userData) {
							return redirect("face-detection")
						} else {
							return null
						}
					}}
				/>

				<Route path="email-verification">
					<Route
						index
						element={<EmailVerification />}
						loader={async () => {
							const userData = await getUserData()
							if (userData) {
								return redirect("face-detection")
							} else {
								return null
							}
						}}
					/>
					<Route path="error">
						<Route
							index
							element={<Error />}
							loader={async () => {
								const userData = await getUserData()
								if (userData) {
									return redirect("face-detection")
								} else {
									return null
								}
							}}
						/>
						<Route
							path="invalid-token"
							element={<InvalidToken />}
							loader={async () => {
								const userData = await getUserData()
								if (userData) {
									return redirect("face-detection")
								} else {
									return null
								}
							}}
						/>
					</Route>
					<Route
						path="activation-success"
						element={<ActivationSuccess />}
						loader={async () => {
							const userData = await getUserData()
							if (userData) {
								return redirect("face-detection")
							} else {
								return null
							}
						}}
					/>
				</Route>

				<Route
					path="forgot-password"
					element={<ForgotPassword />}
					action={forgotPassword}
					loader={async () => {
						const userData = await getUserData()
						if (userData) {
							return redirect("face-detection")
						} else {
							return null
						}
					}}
				/>

				<Route path="password-reset">
					<Route
						path=":resetToken"
						element={<PasswordReset />}
						action={passwordReset}
						loader={async () => {
							const userData = await getUserData()
							if (userData) {
								return redirect("face-detection")
							} else {
								return null
							}
						}}
					/>
					<Route
						path="reset-success"
						element={<ResetSuccess />}
						loader={async () => {
							const userData = await getUserData()
							if (userData) {
								return redirect("face-detection")
							} else {
								return null
							}
						}}
					/>
				</Route>

				<Route
					path="face-detection"
					element={<FaceDetection />}
					loader={async () => {
						const userData = await getUserData()
						if (userData) {
							return userData
						} else {
							return redirect("/")
						}
					}}
					action={incrementEntry}
				/>
			</Route>

			<Route path="/*" element={<NotFound />} />
		</>
	)
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
