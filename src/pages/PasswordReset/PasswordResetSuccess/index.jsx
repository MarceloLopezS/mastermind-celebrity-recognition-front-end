import { Link } from "react-router-dom"
import WithAuthRedirection from "../../../widgets/WithAuthRedirection"
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

const WithAuthRedirectionPasswordResetSuccess = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<PasswordResetSuccess />
		</WithAuthRedirection>
	)
}

const PasswordResetSuccessRoute = {
	path: "reset-success",
	element: <WithAuthRedirectionPasswordResetSuccess />
}

export default PasswordResetSuccessRoute
