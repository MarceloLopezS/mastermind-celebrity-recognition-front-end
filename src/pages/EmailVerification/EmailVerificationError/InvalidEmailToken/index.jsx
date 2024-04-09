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
		const userData = await getUserData()
		if (!userData) return null

		return redirect("/face-detection")
	}
}

export default InvalidEmailTokenRoute
