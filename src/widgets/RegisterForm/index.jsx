import { useRef } from "react"
import { Link, useFetcher } from "react-router-dom"
import { validateAndGetRegisterData } from "./utils/functions"
import "./ui/styles.css"

const RegisterForm = () => {
	const fetcher = useFetcher()
	const name = useRef(null)
	const email = useRef(null)
	const password = useRef(null)
	const confirmPassword = useRef(null)
	const messageContainer = useRef(null)

	return (
		<form
			className="register__form | form-section__form"
			onSubmit={e => {
				const registerData = validateAndGetRegisterData(
					name.current,
					email.current,
					password.current,
					confirmPassword.current,
					messageContainer.current
				)
				e.preventDefault()
				if (registerData) {
					const options = {
						method: "post",
						action: "/register"
					}
					fetcher.submit(registerData, options)
				}
			}}
		>
			<h2 className="justify-self-center">
				Enter your information to register
			</h2>
			<div className="form-group">
				<label htmlFor="user-name">Name:</label>
				<input
					ref={name}
					type="text"
					id="user-name"
					name="user-name"
					maxLength="60"
					placeholder="Please enter your name"
				></input>
			</div>
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
					placeholder="Please enter a password"
				></input>
			</div>
			<div className="form-group">
				<label htmlFor="user-confirm-password">Confirm password:</label>
				<input
					ref={confirmPassword}
					type="password"
					id="user-confirm-password"
					name="user-confirm-password"
					placeholder="Please confirm your password"
				></input>
			</div>
			<div className="register__action">
				<button className="justify-self-center" type="submit">
					Register
				</button>
				<div className="response">
					<span className="loader"></span>
					<div
						ref={messageContainer}
						className="server-response secondary-text"
					></div>
				</div>
			</div>
			<span className="secondary-text justify-self-center">
				Already have an account?
			</span>
			<Link
				className="form-switch | secondary-text justify-self-center text-underline"
				to="/"
			>
				Log In
			</Link>
		</form>
	)
}

export default RegisterForm
