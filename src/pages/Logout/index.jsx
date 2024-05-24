import WithLocalAuthRedirection from "../../widgets/WithLocalAuthRedirection"
import { submitLogoutRequest } from "./model/reactRouterActions"

const WithLocalAuthRedirectionLogout = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : "/"
			}
		/>
	)
}

const LogoutRoute = {
	path: "logout",
	element: <WithLocalAuthRedirectionLogout />,
	action: submitLogoutRequest
}

export default LogoutRoute
