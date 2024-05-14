import React from "react"
import EmailVerificationErrorRoute from "./EmailVerificationError"
import AccountActivationSuccessRoute from "./AccountActivationSuccess"
import checkUserAuthentication from "../../features/CheckUserAuthentication"

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

const EmailVerificationRoute = {
	path: "email-verification",
	children: [
		{
			index: true,
			element: <EmailVerification />,
			loader: async () => {
				try {
					const data = await checkUserAuthentication()
					if (!data?.authenticated) return null

					return redirect("/face-detection")
				} catch (err) {
					console.error(err)
					return null
				}
			}
		},
		EmailVerificationErrorRoute,
		AccountActivationSuccessRoute
	]
}

export default EmailVerificationRoute
