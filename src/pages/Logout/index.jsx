import WithAuthRedirection from "../../widgets/WithAuthRedirection"
import { submitLogoutRequest } from "./model/reactRouterActions"

const WithAuthRedirectionLogout = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : "/"
			}
		/>
	)
}

const LogoutRoute = {
	path: "logout",
	element: <WithAuthRedirectionLogout />,
	action: submitLogoutRequest
}

export default LogoutRoute
