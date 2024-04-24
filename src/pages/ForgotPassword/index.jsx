import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import ForgotPasswordForm from "../../widgets/ForgotPasswordForm"
import { submitForgotPasswordForm } from "./model/ReactRouterActions"
import styles from "./ui/styles.module.css"

const ForgotPassword = () => {
	return (
		<section
			className={`${styles["forgot-password"]} | form-section container`}
		>
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
