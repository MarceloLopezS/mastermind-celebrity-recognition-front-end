import { PATHNAMES } from "../../shared/utils/constants"
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
				isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
			}
		>
			<ForgotPassword />
		</WithLocalAuthRedirection>
	)
}

const ForgotPasswordRoute = {
	path: PATHNAMES.FORGOT_PASSWORD,
	element: <WithLocalAuthRedirectionForgotPassword />,
	action: submitForgotPasswordForm
}

export default ForgotPasswordRoute
