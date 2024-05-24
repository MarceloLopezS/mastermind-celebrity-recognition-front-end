import WithAuthRedirection from "../../widgets/WithAuthRedirection"
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

const WithAuthRedirectionForgotPassword = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<ForgotPassword />
		</WithAuthRedirection>
	)
}

const ForgotPasswordRoute = {
	path: "forgot-password",
	element: <WithAuthRedirectionForgotPassword />,
	action: submitForgotPasswordForm
}

export default ForgotPasswordRoute
