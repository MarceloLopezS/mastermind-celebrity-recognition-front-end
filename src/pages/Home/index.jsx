import { redirect } from "react-router-dom"
import { loginUser } from "../../controllers/ReactRouterActions/actions"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import LoginForm from "../../widgets/LoginForm"

const Home = () => {
	return <LoginForm />
}

const HomeRoute = {
	index: true,
	element: <Home />,
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return null

		return redirect("face-detection")
	},
	action: loginUser
}

export default HomeRoute
