import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import ResetPasswordForm from "../../widgets/ResetPasswordForm"
import { submitPasswordResetForm } from "./model/ReactRouterActions"
import PasswordResetSuccessRoute from "./PasswordResetSuccess"
import styles from "./ui/styles.module.css"

const PasswordReset = () => {
	return (
		<section className={`${styles["password-reset"]} | form-section container`}>
			<ResetPasswordForm />
		</section>
	)
}

const PasswordResetRoute = {
	path: "password-reset",
	children: [
		{
			path: ":resetToken",
			element: <PasswordReset />,
			loader: async () => {
				const userData = await getUserData()
				if (!userData) return null

				return redirect("/face-detection")
			},
			action: submitPasswordResetForm
		},
		PasswordResetSuccessRoute
	]
}

export default PasswordResetRoute
