import checkUserAuthentication from "../../../../features/CheckUserAuthentication"

const InvalidEmailToken = () => {
	return (
		<section className="container email-verification-section">
			<div>
				<h1>An error occured</h1>
				<p>
					<span className="text-highlight">The token is invalid.</span> Please
					verify that the link is complete and correct.
				</p>
			</div>
		</section>
	)
}

const InvalidEmailTokenRoute = {
	path: "invalid-token",
	element: <InvalidEmailToken />,
	loader: async () => {
		try {
			const data = await checkUserAuthentication()
			if (!data?.authenticated) return null

			return redirect("/face-detection")
		} catch (err) {
			console.error(err)
			return null
		}
	}
}

export default InvalidEmailTokenRoute
