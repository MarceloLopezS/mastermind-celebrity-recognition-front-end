import WithAuthRedirection from "../../widgets/WithAuthRedirection"
import { submitRegisterForm } from "./model/reactRouterActions"
import RegisterForm from "../../widgets/RegisterForm"
import styles from "./ui/styles.module.css"

const Register = () => {
	return (
		<section className={`${styles["register"]} form-section container`}>
			<RegisterForm />
		</section>
	)
}

const WithAuthRedirectionRegister = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<Register />
		</WithAuthRedirection>
	)
}

const RegisterRoute = {
	path: "register",
	element: <WithAuthRedirectionRegister />,
	action: submitRegisterForm
}

export default RegisterRoute
