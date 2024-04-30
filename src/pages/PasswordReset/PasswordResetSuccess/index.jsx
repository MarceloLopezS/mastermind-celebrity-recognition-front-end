import { Link } from "react-router-dom"
import checkUserAuthentication from "../../../features/CheckUserAuthentication"

const PasswordResetSuccess = () => {
	return (
		<section className="container reset-success-section">
			<div>
				<h1>Password successfully reset</h1>
				<p>
					You can now{" "}
					<span className="text-highlight">
						<Link to="/">log in to your account</Link>
					</span>{" "}
					with your new password. Have fun!
				</p>
			</div>
		</section>
	)
}

const PasswordResetSuccessRoute = {
	path: "reset-success",
	element: <PasswordResetSuccess />,
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
}

export default PasswordResetSuccessRoute
