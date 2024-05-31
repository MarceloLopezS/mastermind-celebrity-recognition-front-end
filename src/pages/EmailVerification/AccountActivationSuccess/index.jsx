import { PATHNAMES } from "@/shared/utils/constants"
import { Link } from "react-router-dom"
import WithLocalAuthRedirection from "@/widgets/WithLocalAuthRedirection"

const AccountActivationSuccess = () => {
	return (
		<section className="container email-verification-section">
			<div className="box-shadow--app-theme">
				<h1>Account verification successful</h1>
				<p>
					You can now{" "}
					<span className="text-highlight">
						<Link to="/login">log in to your account</Link>
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
				isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
			}
		>
			<AccountActivationSuccess />
		</WithLocalAuthRedirection>
	)
}

const AccountActivationSuccessRoute = {
	path: PATHNAMES.ACTIVATION_SUCCESS,
	element: <WithLocalAuthRedirectionAccountActivationSuccess />
}

export default AccountActivationSuccessRoute
