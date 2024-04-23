import { redirect } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { submitLogoutRequest } from "./model/reactRouterActions"

const LogoutRoute = {
	path: "logout",
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return redirect("/")

		return redirect("/face-detection")
	},
	action: submitLogoutRequest
}

export default LogoutRoute
