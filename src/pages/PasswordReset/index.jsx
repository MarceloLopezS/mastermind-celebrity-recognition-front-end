import ResetPasswordForm from "../../widgets/ResetPasswordForm"
import WithAuthRedirection from "../../widgets/WithAuthRedirection"
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

const WithAuthRedirectionPasswordReset = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<PasswordReset />
		</WithAuthRedirection>
	)
}

const PasswordResetRoute = {
	path: "password-reset",
	children: [
		{
			path: ":resetToken",
			element: <WithAuthRedirectionPasswordReset />,
			action: submitPasswordResetForm
		},
		PasswordResetSuccessRoute
	]
}

export default PasswordResetRoute
