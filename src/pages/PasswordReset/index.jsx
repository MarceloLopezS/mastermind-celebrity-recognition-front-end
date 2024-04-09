import { useRef } from "react"
import { useFetcher, useParams } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { passwordReset } from "../../controllers/ReactRouterActions/actions"
import PasswordResetSuccessRoute from "./PasswordResetSuccess"
import "./ui/styles.css"

const validateAndGetPassword = (
	password,
	confirmPassword,
	messageContainer
) => {
	const inputs = [password, confirmPassword]
	let validForm = true

	messageContainer.removeAttribute("data-danger")
	messageContainer.textContent = ""
	inputs.forEach(input => {
		input.classList.remove("invalid")
	})

	inputs.forEach(input => {
		if (!input.value) {
			validForm = false
			input.classList.add("invalid")
		}
	})
	if (
		password.value &&
		confirmPassword.value &&
		password.value !== confirmPassword.value
	) {
		validForm = false
		password.classList.add("invalid")
		confirmPassword.classList.add("invalid")
		password.setAttribute("placeholder", "Passwords don't match")
		confirmPassword.setAttribute("placeholder", "Passwords don't match")
		password.value = ""
		confirmPassword.value = ""
	}

	if (validForm) {
		const formData = {
			password: password.value,
			confirmPassword: confirmPassword.value
		}

		return formData
	}

	return null
}

const PasswordReset = () => {
	const fetcher = useFetcher()
	const password = useRef(null)
	const confirmPassword = useRef(null)
	const messageContainer = useRef(null)
	const { resetToken } = useParams()

	return (
		<section className="form-section password-reset container">
			<form
				className="form-section__form password-reset__form"
				onSubmit={e => {
					e.preventDefault()
					const passwordResetData = validateAndGetPassword(
						password.current,
						confirmPassword.current,
						messageContainer.current
					)
					if (passwordResetData) {
						const options = {
							method: "post",
							action: "/password-reset/:resetToken"
						}
						fetcher.submit({ ...passwordResetData, resetToken }, options)
					}
				}}
			>
				<h2 className="justify-self-center">
					Enter and confirm your new password
				</h2>
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
				<div className="password-reset__action">
					<button className="justify-self-center" type="submit">
						Submit
					</button>
					<div className="response">
						<span className="loader"></span>
						<div
							ref={messageContainer}
							className="server-response secondary-text"
						></div>
					</div>
				</div>
			</form>
		</section>
	)
}

const PasswordResetRoute = {
	path: "password-reset",
	children: [
		{
			path: ":resetToken",
			element: <PasswordReset />,
			loader: async () => {
				const userData = await getUserData()
				if (!userData) return null

				return redirect("/face-detection")
			},
			action: passwordReset
		},
		PasswordResetSuccessRoute
	]
}

export default PasswordResetRoute
