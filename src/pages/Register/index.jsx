import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { registerUser } from "../../controllers/ReactRouterActions/actions"
import RegisterForm from "../../widgets/RegisterForm"
import "./ui/styles.css"

const Register = () => {
	return (
		<section className="form-section register container">
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

		return redirect("face-detection")
	},
	action: registerUser
}

export default RegisterRoute
