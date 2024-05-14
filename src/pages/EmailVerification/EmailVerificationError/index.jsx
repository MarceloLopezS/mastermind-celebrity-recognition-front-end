import checkUserAuthentication from "../../../features/CheckUserAuthentication"
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

const EmailVerificationErrorRoute = {
	path: "error",
	children: [
		{
			index: true,
			element: <EmailVerificationError />,
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
		},
		InvalidEmailTokenRoute
	]
}

export default EmailVerificationErrorRoute
