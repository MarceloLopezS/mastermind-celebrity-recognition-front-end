import { useCallback } from "react"
import { useFetcher, Link } from "react-router-dom"
import { PATHNAMES } from "../../shared/utils/constants"
import {
	isValidEmail,
	getInvalidEmailError,
	isValidInputString,
	isValidPassword,
	getInvalidPasswordError,
	isValidPasswordConfirmation,
	getInvalidConfirmPasswordError
} from "../../shared/utils/functions"
import Form, {
	useInputValidationHandler,
	handleFormValidation,
	handleInputServerErrors
} from "../../shared/ui/Form"
import Input from "../../shared/ui/Input"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import styles from "./ui/styles.module.css"

const RegisterForm = () => {
	const fetcher = useFetcher()
	const actionResponse = fetcher.data
	const nameHandler = useInputValidationHandler(isValidInputString)
	const emailHandler = useInputValidationHandler(
		isValidEmail,
		getInvalidEmailError
	)
	const passwordHandler = useInputValidationHandler(
		isValidPassword,
		getInvalidPasswordError
	)
	const confirmPasswordHandler = useInputValidationHandler(
		isValidPasswordConfirmation(passwordHandler.inputRef),
		getInvalidConfirmPasswordError(passwordHandler.inputRef)
	)
	const formInputHandlers = [
		nameHandler,
		emailHandler,
		passwordHandler,
		confirmPasswordHandler
	]

	if (actionResponse?.status === "user-errors") {
		const userErrors = Object.entries(actionResponse.errors)
		handleInputServerErrors({ errors: userErrors, formInputHandlers })
	}

	const submitDataToFetcher = useCallback(event => {
		event.preventDefault()
		const isFormValid = handleFormValidation(...formInputHandlers)

		if (!isFormValid) return

		const registerData = {
			name: nameHandler.inputRef.current?.value,
			email: emailHandler.inputRef.current?.value,
			password: passwordHandler.inputRef.current?.value,
			confirmPassword: confirmPasswordHandler.inputRef.current?.value
		}
		const options = {
			method: "post",
			action: `/${PATHNAMES.REGISTER}`
		}
		fetcher.submit(registerData, options)
	}, [])

	return (
		<Form
			className={`${styles["register__form"]} | form-section__form`}
			onSubmit={submitDataToFetcher}
		>
			<h2 className="justify-self-center">
				Enter your information to register
			</h2>
			<div className="form-group">
				<label htmlFor="user-name">Name:</label>
				<Input
					ref={nameHandler.inputRef}
					onChange={() => !nameHandler.isValid && nameHandler.validate()}
					isValid={nameHandler.isValid}
					type="text"
					id="user-name"
					name="user-name"
					maxLength="60"
					placeholder={nameHandler.errorMessage || "Please enter your name"}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user-email">Email:</label>
				<Input
					ref={emailHandler.inputRef}
					onChange={() => !emailHandler.isValid && emailHandler.validate()}
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
						!passwordHandler.isValid && passwordHandler.validate()
					}
					isValid={passwordHandler.isValid}
					type="password"
					id="user-password"
					name="user-password"
					placeholder={
						passwordHandler.errorMessage || "Please enter a password"
					}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user-confirm-password">Confirm password:</label>
				<Input
					ref={confirmPasswordHandler.inputRef}
					onChange={() =>
						!confirmPasswordHandler.isValid && confirmPasswordHandler.validate()
					}
					isValid={confirmPasswordHandler.isValid}
					type="password"
					id="user-confirm-password"
					name="user-confirm-password"
					placeholder={
						confirmPasswordHandler.errorMessage ||
						"Please confirm your password"
					}
				/>
			</div>
			<div className="register__action">
				<button
					className="justify-self-center"
					type="submit"
					disabled={fetcher.state === "submitting"}
				>
					Register
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
			<span className="secondary-text justify-self-center">
				Already have an account?
			</span>
			<Link
				className="form-switch | secondary-text justify-self-center text-underline"
				to="/login"
			>
				Log In
			</Link>
		</Form>
	)
}

export default RegisterForm
