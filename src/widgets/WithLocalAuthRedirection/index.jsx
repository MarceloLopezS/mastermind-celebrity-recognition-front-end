import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "@/shared/state/store"

const WithLocalAuthRedirection = ({
	resolveRedirectPath = (isUserAuthenticated = false) =>
		isUserAuthenticated ? new String() : null,
	children
}) => {
	const { isUserAuthenticated } = useContext(StoreContext)
	const navigate = useNavigate()
	const redirectTo = resolveRedirectPath(isUserAuthenticated)

	useEffect(() => {
		if (redirectTo != null && typeof redirectTo === "string")
			navigate(redirectTo)
	}, [isUserAuthenticated])

	return redirectTo == null ? children : null
}

export default WithLocalAuthRedirection
