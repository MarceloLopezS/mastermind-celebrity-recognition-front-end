import { useRef } from "react"
import { Link, useFetcher } from "react-router-dom"
import { validateAndGetLoginData } from "./utils/functions"
import "./ui/styles.css"

const LoginForm = () => {
	const fetcher = useFetcher()
	const email = useRef(null)
	const password = useRef(null)
	const messageContainer = useRef(null)

	return (
		<section className="form-section log-in container">
			<form
				className="form-section__form log-in__form"
				onSubmit={e => {
					e.preventDefault()
					const loginData = validateAndGetLoginData(
						email.current,
						password.current,
						messageContainer.current
					)
					if (loginData) {
						const options = {
							method: "post",
							action: "/?index"
						}
						fetcher.submit(loginData, options)
					}
				}}
			>
				<h2 className="justify-self-center">
					Enter your account credentials to access celebrity face detection
				</h2>
				<div className="form-group">
					<label htmlFor="user-email">Email:</label>
					<input
						ref={email}
						type="email"
						id="user-email"
						name="user-email"
						maxLength="100"
						placeholder="Please enter your email"
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="user-password">Password:</label>
					<input
						ref={password}
						type="password"
						id="user-password"
						name="user-password"
						placeholder="Please enter your password"
					></input>
				</div>
				<div className="login__action">
					<button className="justify-self-center" type="submit">
						Log In
					</button>
					<div className="response">
						<span className="loader"></span>
						<div
							ref={messageContainer}
							className="server-response secondary-text"
						></div>
					</div>
				</div>
				<Link
					className="form-switch | secondary-text justify-self-center text-underline"
					to="/forgot-password"
				>
					Forgot your password?
				</Link>
				<span className="secondary-text justify-self-center">
					Don't have an account yet?
				</span>
				<Link
					className="form-switch | secondary-text justify-self-center text-underline"
					to="/register"
				>
					Register
				</Link>
			</form>
		</section>
	)
}

export default LoginForm
