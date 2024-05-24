import WithLocalAuthRedirection from "../../widgets/WithLocalAuthRedirection"
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

const WithLocalAuthRedirectionForgotPassword = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<ForgotPassword />
		</WithLocalAuthRedirection>
	)
}

const ForgotPasswordRoute = {
	path: "forgot-password",
	element: <WithLocalAuthRedirectionForgotPassword />,
	action: submitForgotPasswordForm
}

export default ForgotPasswordRoute
