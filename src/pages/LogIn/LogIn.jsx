import { useRef } from "react"
import { Link, useFetcher } from "react-router-dom"
import "./LogIn.css"

const validateAndGetLoginData = (email, password, messageContainer) => {
	const inputs = [email, password]
	let validForm = true

	messageContainer.removeAttribute("data-danger")
	messageContainer.textContent = ""
	email.setAttribute("placeholder", "Please enter your email")
	inputs.forEach(input => {
		input.classList.remove("invalid")
	})

	inputs.forEach(input => {
		if (!input.value) {
			validForm = false
			input.classList.add("invalid")
		}
	})
	if (email.value) {
		const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
		if (!email.value.match(regex)) {
			validForm = false
			email.classList.add("invalid")
			email.setAttribute("placeholder", "Please enter a valid email")
			email.value = ""
		}
	}

	if (validForm) {
		const formData = {
			email: email.value,
			password: password.value
		}

		return formData
	}

	return null
}

const LogIn = () => {
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

export default LogIn
