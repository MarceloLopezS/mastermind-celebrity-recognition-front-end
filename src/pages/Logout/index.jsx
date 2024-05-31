import { PATHNAMES } from "@/shared/utils/constants"
import WithLocalAuthRedirection from "@/widgets/WithLocalAuthRedirection"
import { submitLogoutRequest } from "./model/reactRouterActions"

const WithLocalAuthRedirectionLogout = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : "/"
			}
		/>
	)
}

const LogoutRoute = {
	path: PATHNAMES.LOGOUT,
	element: <WithLocalAuthRedirectionLogout />,
	action: submitLogoutRequest
}

export default LogoutRoute
