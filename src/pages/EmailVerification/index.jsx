import React from "react"
import WithAuthRedirection from "../../widgets/WithAuthRedirection"
import EmailVerificationErrorRoute from "./EmailVerificationError"
import AccountActivationSuccessRoute from "./AccountActivationSuccess"

const EmailVerification = () => {
	return (
		<section className="container email-verification-section">
			<div className="box-shadow--app-theme">
				<h1>Verify your account</h1>
				<p>
					In order to log in and be able to use face detection on images through
					our app, you need to verify your account.
				</p>
				<p>
					We have <span className="text-highlight">sent you an email</span> with
					the verification link. Please access it to complete your account
					verification.
				</p>
			</div>
		</section>
	)
}

const WithAuthRedirectionEmailVerification = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<EmailVerification />
		</WithAuthRedirection>
	)
}

const EmailVerificationRoute = {
	path: "email-verification",
	children: [
		{
			index: true,
			element: <WithAuthRedirectionEmailVerification />
		},
		EmailVerificationErrorRoute,
		AccountActivationSuccessRoute
	]
}

export default EmailVerificationRoute
