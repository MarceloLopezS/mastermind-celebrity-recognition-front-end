import checkUserAuthentication from "../../features/CheckUserAuthentication"
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
		try {
			const data = await checkUserAuthentication()
			if (!data?.authenticated) return null

			return redirect("/face-detection")
		} catch (err) {
			console.error(err)
			return null
		}
	},
	action: submitForgotPasswordForm
}

export default ForgotPasswordRoute
