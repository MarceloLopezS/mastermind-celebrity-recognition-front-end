import WithLocalAuthRedirection from "../../widgets/WithLocalAuthRedirection"
import { submitLoginForm } from "./model/reactRouterActions"
import LoginForm from "../../widgets/LoginForm"
import styles from "./ui/styles.module.css"

const Login = () => {
	return (
		<section className={`${styles["log-in"]} | form-section container`}>
			<LoginForm />
		</section>
	)
}

const WithLocalAuthRedirectionLogin = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<Login />
		</WithLocalAuthRedirection>
	)
}

const LoginRoute = {
	path: "login",
	element: <WithLocalAuthRedirectionLogin />,
	action: submitLoginForm
}

export default LoginRoute
