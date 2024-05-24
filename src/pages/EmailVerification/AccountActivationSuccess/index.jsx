import { Link } from "react-router-dom"
import WithLocalAuthRedirection from "../../../widgets/WithLocalAuthRedirection"

const AccountActivationSuccess = () => {
	return (
		<section className="container email-verification-section">
			<div className="box-shadow--app-theme">
				<h1>Account verification successful</h1>
				<p>
					You can now{" "}
					<span className="text-highlight">
						<Link to="/">log in to your account</Link>
					</span>{" "}
					and use face detection. Have fun!
				</p>
			</div>
		</section>
	)
}

const WithLocalAuthRedirectionAccountActivationSuccess = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<AccountActivationSuccess />
		</WithLocalAuthRedirection>
	)
}

const AccountActivationSuccessRoute = {
	path: "activation-success",
	element: <WithLocalAuthRedirectionAccountActivationSuccess />
}

export default AccountActivationSuccessRoute
