import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
	return (
		<section className="container not-found-section">
			<h1>404</h1>
			<p>
				Page not found 🫤 Go back to{" "}
				<span className="text-highlight">
					<Link to="/">home.</Link>
				</span>
			</p>
		</section>
	)
}

const NotFoundRoute = {
	path: "/*",
	element: <NotFound />
}

export default NotFoundRoute
