import WithLocalAuthRedirection from "../../../widgets/WithLocalAuthRedirection"
import InvalidEmailTokenRoute from "./InvalidEmailToken"

const EmailVerificationError = () => {
	return (
		<section className="container email-verification-section">
			<div className="box-shadow--app-theme">
				<h1>An error occured</h1>
				<p>
					<span className="text-highlight">Something went wrong</span> during
					the activation process. Please verify that your link has not expired,
					or try again later.
				</p>
			</div>
		</section>
	)
}

const WithLocalAuthRedirectionEmailVerificationError = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<EmailVerificationError />
		</WithLocalAuthRedirection>
	)
}

const EmailVerificationErrorRoute = {
	path: "error",
	children: [
		{
			index: true,
			element: <WithLocalAuthRedirectionEmailVerificationError />
		},
		InvalidEmailTokenRoute
	]
}

export default EmailVerificationErrorRoute
