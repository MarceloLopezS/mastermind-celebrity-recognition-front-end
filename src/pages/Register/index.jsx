import checkUserAuthentication from "../../features/CheckUserAuthentication"
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

const RegisterRoute = {
	path: "register",
	element: <Register />,
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
	action: submitRegisterForm
}

export default RegisterRoute
