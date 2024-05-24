import { Link } from "react-router-dom"
import WithLocalAuthRedirection from "../../../widgets/WithLocalAuthRedirection"
const PasswordResetSuccess = () => {
	return (
		<section className="container reset-success-section">
			<div>
				<h1>Password successfully reset</h1>
				<p>
					You can now{" "}
					<span className="text-highlight">
						<Link to="/login">log in to your account</Link>
					</span>{" "}
					with your new password. Have fun!
				</p>
			</div>
		</section>
	)
}

const WithLocalAuthRedirectionPasswordResetSuccess = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<PasswordResetSuccess />
		</WithLocalAuthRedirection>
	)
}

const PasswordResetSuccessRoute = {
	path: "reset-success",
	element: <WithLocalAuthRedirectionPasswordResetSuccess />
}

export default PasswordResetSuccessRoute
