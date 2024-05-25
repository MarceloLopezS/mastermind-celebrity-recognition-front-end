import { PATHNAMES } from "../../../../shared/utils/constants"
import WithLocalAuthRedirection from "../../../../widgets/WithLocalAuthRedirection"

const InvalidEmailToken = () => {
	return (
		<section className="container email-verification-section">
			<div className="box-shadow--app-theme">
				<h1>An error occured</h1>
				<p>
					<span className="text-highlight">The token is invalid.</span> Please
					verify that the link is complete and correct.
				</p>
			</div>
		</section>
	)
}

const WithAuthRedirectionInvalidEmailToken = () => {
	return (
		<WithLocalAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
			}
		>
			<InvalidEmailToken />
		</WithLocalAuthRedirection>
	)
}

const InvalidEmailTokenRoute = {
	path: PATHNAMES.INVALID_TOKEN,
	element: <WithAuthRedirectionInvalidEmailToken />
}

export default InvalidEmailTokenRoute
