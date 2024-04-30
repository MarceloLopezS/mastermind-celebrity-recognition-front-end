import { redirect } from "react-router-dom"
import { submitLoginForm } from "./model/reactRouterActions"
import checkUserAuthentication from "../../features/CheckUserAuthentication"
import LoginForm from "../../widgets/LoginForm"
import styles from "./ui/styles.module.css"

const Login = () => {
	return (
		<section className={`${styles["log-in"]} | form-section container`}>
			<LoginForm />
		</section>
	)
}

const LoginRoute = {
	element: <Login />,
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
	action: submitLoginForm
}

export default LoginRoute
