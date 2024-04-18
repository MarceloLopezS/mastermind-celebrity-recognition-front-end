import { useCallback } from "react"
import { useFetcher, useParams } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import {
	isValidPassword,
	getInvalidPasswordError,
	isValidPasswordConfirmation,
	getInvalidConfirmPasswordError
} from "../../shared/utils/functions"
import Form, {
	useInputValidationHandler,
	handleInputServerErrors,
	handleFormValidation
} from "../../shared/ui/Form"
import Input from "../../shared/ui/Input"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import { submitPasswordResetForm } from "./model/ReactRouterActions"
import PasswordResetSuccessRoute from "./PasswordResetSuccess"
import "./ui/styles.css"

const PasswordReset = () => {
	const { resetToken } = useParams()
	const fetcher = useFetcher()
	const actionResponse = fetcher.data
	const passwordHandler = useInputValidationHandler(
		isValidPassword,
		getInvalidPasswordError
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
			action: "/password-reset/:resetToken"
		}
		fetcher.submit({ ...passwordResetData, resetToken }, options)
	}, [])

	return (
		<section className="form-section password-reset container">
			<Form
				className="form-section__form password-reset__form"
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
							!confirmPasswordHandler.isValid &&
								confirmPasswordHandler.validate()
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
								? actionResponse?.fail?.message ||
								  actionResponse?.clientError?.message
								: null}
						</div>
					</div>
				</div>
			</Form>
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
			action: submitPasswordResetForm
		},
		PasswordResetSuccessRoute
	]
}

export default PasswordResetRoute
