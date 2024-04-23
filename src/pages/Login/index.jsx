import { redirect } from "react-router-dom"
import { submitLoginForm } from "./model/reactRouterActions"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
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
		const userData = await getUserData()
		if (!userData) return null

		return redirect("/face-detection")
	},
	action: submitLoginForm
}

export default LoginRoute
