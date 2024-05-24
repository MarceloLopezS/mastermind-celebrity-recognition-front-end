import WithAuthRedirection from "../../widgets/WithAuthRedirection"
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

const WithAuthRedirectionLogin = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<Login />
		</WithAuthRedirection>
	)
}

const LoginRoute = {
	path: "login",
	element: <WithAuthRedirectionLogin />,
	action: submitLoginForm
}

export default LoginRoute
