import { Link } from "react-router-dom"
import { getUserData } from "../../../controllers/ReactRouterLoaders/loaders"

const AccountActivationSuccess = () => {
	return (
		<section className="container email-verification-section">
			<div>
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
		const userData = await getUserData()
		if (!userData) return null

		return redirect("/face-detection")
	}
}

export default AccountActivationSuccessRoute
