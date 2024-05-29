import { useCallback } from "react"
import { useParams, useFetcher } from "react-router-dom"
import { PATHNAMES } from "../../shared/utils/constants"
import {
	getInvalidConfirmPasswordError,
	isValidPassword,
	isValidPasswordConfirmation
} from "../../shared/utils/functions"
import Form, {
	useInputValidationHandler,
	handleInputServerErrors,
	handleFormValidation
} from "../../shared/ui/Form"
import Input from "../../shared/ui/Input"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import styles from "./ui/styles.module.css"

const ResetPasswordForm = () => {
	const { resetToken } = useParams()
	const fetcher = useFetcher()
	const actionResponse = fetcher.data
	const passwordHandler = useInputValidationHandler(
		isValidPassword,
		getInvalidConfirmPasswordError
	)
	const confirmPasswordHandler = useInputValidationHandler(
		isValidPasswordConfirmation(passwordHandler.inputRef),
		getInvalidConfirmPasswordError(passwordHandler.inputRef)
	)

	if (actionResponse?.status === "user-errors") {
		const userErrors = Object.entries(actionResponse.errors)
		handleInputServerErrors({
			errors: userErrors,
			formInputHandlers: [passwordHandler, confirmPasswordHandler]
		})
	}

	const submitDataToFetcher = useCallback(event => {
		event.preventDefault()
		const isFormValid = handleFormValidation(
			passwordHandler,
			confirmPasswordHandler
		)

		if (!isFormValid) return

		const passwordResetData = {
			password: passwordHandler.inputRef.current?.value,
			confirmPassword: confirmPasswordHandler.inputRef.current?.value
		}
		const options = {
			method: "post",
			action: `/${PATHNAMES.PASSWORD_RESET}/:resetToken`
		}
		fetcher.submit({ ...passwordResetData, resetToken }, options)
	}, [])

	return (
		<Form
			className={`${styles["password-reset__form"]} | form-section__form`}
			onSubmit={submitDataToFetcher}
		>
			<h2 className="justify-self-center">
				Enter and confirm your new password
			</h2>
			<div className="form-group">
				<label htmlFor="user-password">Password:</label>
				<Input
					ref={passwordHandler.inputRef}
					onChange={() => {
						!passwordHandler.isValid && passwordHandler.validate()
					}}
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
					onChange={() => {
						!confirmPasswordHandler.isValid && confirmPasswordHandler.validate()
					}}
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
			<div className="password-reset__action">
				<button
					className="justify-self-center"
					type="submit"
					disabled={fetcher.state === "submitting"}
				>
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
							? actionResponse?.fail?.message ||
							  actionResponse?.clientError?.message
							: null}
					</div>
				</div>
			</div>
		</Form>
	)
}

export default ResetPasswordForm
