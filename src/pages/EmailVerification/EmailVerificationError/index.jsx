import { getUserData } from "../../../controllers/ReactRouterLoaders/loaders"
import InvalidEmailTokenRoute from "./InvalidEmailToken"

const EmailVerificationError = () => {
	return (
		<section className="container email-verification-section">
			<div>
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

const EmailVerificationErrorRoute = {
	path: "error",
	children: [
		{
			index: true,
			element: <EmailVerificationError />,
			loader: async () => {
				const userData = await getUserData()
				if (!userData) return null

				return redirect("/face-detection")
			}
		},
		InvalidEmailTokenRoute
	]
}

export default EmailVerificationErrorRoute
