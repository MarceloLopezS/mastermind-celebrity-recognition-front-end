import { redirect } from "react-router-dom"
import { submitLoginForm } from "./model/reactRouterActions"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import LoginForm from "../../widgets/LoginForm"

const Home = () => {
	return <LoginForm />
}

const HomeRoute = {
	element: <Home />,
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return null

		return redirect("face-detection")
	},
	action: submitLoginForm
}

export default HomeRoute
