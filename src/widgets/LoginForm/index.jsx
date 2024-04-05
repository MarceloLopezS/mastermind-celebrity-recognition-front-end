import { useCallback } from "react"
import { useFetcher, Link, redirect } from "react-router-dom"
import { useInputValidationHandler } from "./model/hooks"
import { isValidEmail, isValidInputString } from "../../shared/utils/functions"
import Input from "../../shared/ui/Input"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import "./ui/styles.css"

const LoginForm = () => {
	const fetcher = useFetcher()
	const actionResponse = fetcher.data
	const emailHandler = useInputValidationHandler()
	const passwordHandler = useInputValidationHandler()
	const formInputHandlers = [emailHandler, passwordHandler]

	if (actionResponse?.status === "user-errors") {
		const userErrors = Object.entries(actionResponse.errors)

		userErrors.forEach(keyValueArray => {
			const [fieldname, errorMessage] = keyValueArray

			formInputHandlers.forEach(handler => {
				const { inputRef, setIsValid, setErrorMessage } = handler
				const input = inputRef.current

				if (
					input.hasAttribute("name" && input.getAttribute("name") === fieldname)
				) {
					setIsValid(false)
					setErrorMessage(errorMessage)
				}
			})
		})
	}

	if (actionResponse?.status === "success") redirect("/face-detection")

	const submitDataToFetcher = useCallback(event => {
		event.preventDefault()
		let isValidForm = true

		if (!isValidEmail(emailHandler.inputRef.current?.value)) {
			isValidForm = false
			emailHandler.setIsValid(false)
			emailHandler.setErrorMessage(
				emailHandler.inputRef.current.value && "Please enter a valid email"
			)
		}
		if (!isValidInputString(passwordHandler.inputRef.current?.value)) {
			isValidForm = false
			passwordHandler.setIsValid(false)
		}

		if (!isValidForm) return

		const loginData = {
			email: emailHandler.inputRef.current.value,
			password: passwordHandler.inputRef.current.value
		}
		const options = {
			method: "post",
			action: "/?index"
		}
		fetcher.submit(loginData, options)
	}, [])

	return (
		<section className="form-section log-in container">
			<form
				className="form-section__form log-in__form"
				onSubmit={submitDataToFetcher}
			>
				<h2 className="justify-self-center">
					Enter your account credentials to access celebrity face detection
				</h2>
				<div className="form-group">
					<label htmlFor="user-email">Email:</label>
					<Input
						ref={emailHandler.inputRef}
						onChange={() =>
							!emailHandler.isValid && emailHandler.setIsValid(true)
						}
						isValid={emailHandler.isValid}
						type="text"
						id="user-email"
						name="user-email"
						maxLength="100"
						placeholder={emailHandler.errorMessage || "Please enter your email"}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="user-password">Password:</label>
					<Input
						ref={passwordHandler.inputRef}
						onChange={() =>
							!passwordHandler.isValid && passwordHandler.setIsValid(true)
						}
						isValid={passwordHandler.isValid}
						type="password"
						id="user-password"
						name="user-password"
						placeholder={
							passwordHandler.errorMessage || "Please enter your password"
						}
					/>
				</div>
				<div className="login__action">
					<button className="justify-self-center" type="submit">
						Log In
					</button>
					<div className="response">
						<DoubleSquareLoader isShown={fetcher.state === "submitting"} />
						<div
							className="server-response secondary-text"
							data-danger={
								actionResponse && fetcher.state !== "submitting" ? true : null
							}
						>
							{fetcher.state !== "submitting"
								? actionResponse?.fail?.message ||
								  actionResponse?.clientError?.message
								: null}
						</div>
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
