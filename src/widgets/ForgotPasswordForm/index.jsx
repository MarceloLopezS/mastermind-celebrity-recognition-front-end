import { useCallback } from "react"
import { useFetcher } from "react-router-dom"
import {
	getInvalidEmailError,
	isValidEmail
} from "../../shared/utils/functions"
import Form, {
	useInputValidationHandler,
	handleInputServerErrors
} from "../../shared/ui/Form"
import Input from "../../shared/ui/Input"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import styles from "./ui/styles.module.css"

const ForgotPasswordForm = () => {
	const fetcher = useFetcher()
	const actionResponse = fetcher.data
	const emailHandler = useInputValidationHandler(
		isValidEmail,
		getInvalidEmailError
	)

	if (actionResponse?.status === "user-errors") {
		const userErrors = Object.entries(actionResponse.errors)
		handleInputServerErrors({
			errors: userErrors,
			formInputHandlers: [emailHandler]
		})
	}

	const submitDataToFetcher = useCallback(event => {
		event.preventDefault()
		const isFormValid = emailHandler.validate()

		if (!isFormValid) return

		const formData = {
			email: emailHandler.inputRef.current.value
		}
		const options = {
			method: "post",
			action: "/forgot-password"
		}
		fetcher.submit(formData, options)
	}, [])

	return (
		<Form
			className={`${styles["forgot-password__form"]} form-section__form`}
			onSubmit={submitDataToFetcher}
		>
			<h2 className="justify-self-center">
				Enter your email to send a password reset link
			</h2>
			<div className="form-group">
				<label htmlFor="user-email">Email:</label>
				<Input
					ref={emailHandler.inputRef}
					onChange={() => {
						!emailHandler.isValid && emailHandler.validate()
					}}
					isValid={emailHandler.isValid}
					type="email"
					id="user-email"
					name="user-email"
					maxLength="100"
					placeholder={emailHandler.errorMessage || "Please enter your email"}
				/>
			</div>
			<div className="forgot-password__action">
				<button className="justify-self-center" type="submit">
					Submit
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
							? actionResponse?.success?.message ||
							  actionResponse?.fail?.message ||
							  actionResponse?.clientError?.message
							: null}
					</div>
				</div>
			</div>
		</Form>
	)
}

export default ForgotPasswordForm
