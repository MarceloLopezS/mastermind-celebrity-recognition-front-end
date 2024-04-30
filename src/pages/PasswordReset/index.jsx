import checkUserAuthentication from "../../features/CheckUserAuthentication"
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
				try {
					const data = await checkUserAuthentication()
					if (!data?.authenticated) return null

					return redirect("/face-detection")
				} catch (err) {
					console.error(err)
					return null
				}
			},
			action: submitPasswordResetForm
		},
		PasswordResetSuccessRoute
	]
}

export default PasswordResetRoute
