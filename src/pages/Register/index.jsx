import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
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
		const userData = await getUserData()
		if (!userData) return null

		return redirect("/face-detection")
	},
	action: submitRegisterForm
}

export default RegisterRoute
