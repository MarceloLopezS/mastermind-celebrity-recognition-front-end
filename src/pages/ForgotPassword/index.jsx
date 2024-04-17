import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import ForgotPasswordForm from "../../widgets/ForgotPasswordForm"
import { submitForgotPasswordForm } from "./model/ReactRouterActions"

const ForgotPassword = () => {
	return (
		<section className="form-section forgot-password container">
			<ForgotPasswordForm />
		</section>
	)
}

const ForgotPasswordRoute = {
	path: "forgot-password",
	element: <ForgotPassword />,
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return null

		return redirect("/face-detection")
	},
	action: submitForgotPasswordForm
}

export default ForgotPasswordRoute
