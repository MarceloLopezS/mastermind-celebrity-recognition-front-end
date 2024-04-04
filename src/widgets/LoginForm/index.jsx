import { useRef, useCallback } from "react"
import { useFetcher, Link, redirect } from "react-router-dom"
import { validateAndGetLoginData } from "./utils/functions"
import DoubleSquareLoader from "../../shared/ui/DoubleSquareLoader"
import "./ui/styles.css"

const LoginForm = () => {
	const fetcher = useFetcher()
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const formInputRefs = [emailRef, passwordRef]
	const actionResponse = fetcher.data

	if (actionResponse?.status === "user-errors") {
		const userErrors = Object.entries(actionResponse.errors)
		userErrors.forEach(keyValueArray => {
			const fieldname = keyValueArray[0]
			const errorMessage = keyValueArray[1]
			const invalidInputs = formInputRefs.filter(inputRef => {
				const input = inputRef.current
				return (
					input.hasAttibute("name") && input.getAttribute("name") === fieldname
				)
			})

			invalidInputs.forEach(input => {
				input.value = ""
				input.setAttribute("placeholder", errorMessage)
				input.classList.add("invalid")
			})
		})
	}

	if (actionResponse?.status === "success") redirect("/face-detection")

	const submitDataToFetcher = useCallback(event => {
		event.preventDefault()
		const loginData = validateAndGetLoginData(
			emailRef.current,
			passwordRef.current
		)

		if (loginData) {
			const options = {
				method: "post",
				action: "/?index"
			}
			fetcher.submit(loginData, options)
		}
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
					<input
						ref={emailRef}
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
						ref={passwordRef}
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
