import { Link } from "react-router-dom"
import checkUserAuthentication from "../../../features/CheckUserAuthentication"

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

const AccountActivationSuccessRoute = {
	path: "activation-success",
	element: <AccountActivationSuccess />,
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

export default AccountActivationSuccessRoute
