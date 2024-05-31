import { PATHNAMES } from "@/shared/utils/constants"
import WithLocalAuthRedirection from "@/widgets/WithLocalAuthRedirection"
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

const WithLocalAuthRedirectionEmailVerification = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
			}
		>
			<EmailVerification />
		</WithLocalAuthRedirection>
	)
}

const EmailVerificationRoute = {
	path: PATHNAMES.EMAIL_VERIFICATION,
	children: [
		{
			index: true,
			element: <WithLocalAuthRedirectionEmailVerification />
		},
		EmailVerificationErrorRoute,
		AccountActivationSuccessRoute
	]
}

export default EmailVerificationRoute
