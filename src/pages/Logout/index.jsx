import { redirect } from "react-router-dom"
import checkUserAuthentication from "../../features/CheckUserAuthentication"
import { submitLogoutRequest } from "./model/reactRouterActions"

const LogoutRoute = {
	path: "logout",
	loader: async () => {
		try {
			const data = await checkUserAuthentication()
			if (data?.authenticated) return redirect("/face-detection")

			return redirect("/")
		} catch (err) {
			console.error(err)
			return redirect("/")
		}
	},
	action: submitLogoutRequest
}

export default LogoutRoute
