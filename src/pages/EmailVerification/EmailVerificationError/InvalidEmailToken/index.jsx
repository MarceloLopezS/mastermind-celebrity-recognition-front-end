import WithAuthRedirection from "../../../../widgets/WithAuthRedirection"

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
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				isUserAuthenticated ? "/face-detection" : null
			}
		>
			<InvalidEmailToken />
		</WithAuthRedirection>
	)
}

const InvalidEmailTokenRoute = {
	path: "invalid-token",
	element: <WithAuthRedirectionInvalidEmailToken />
}

export default InvalidEmailTokenRoute
