import { useLoaderData, redirect } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { incrementEntry } from "../../controllers/ReactRouterActions/actions"
import ImageDetectionControl from "../../widgets/ImageDetectionControl"
import "./ui/styles.css"

const FaceDetection = () => {
	const { name, entries } = useLoaderData()

	return (
		<section className="face-detection container">
			<p className="face-detection__user-welcome">
				Welcome, {name}. Your current detection count is:
			</p>
			<p className="face-detection__count">{entries}</p>
			<h2>
				You can upload an image to recognize celebrities using an AI model,
				trained with <span className="text-highlight">10 553</span> concepts.
			</h2>
			<p className="secondary-text">
				<span className="text-highlight">A Hint?</span> Take a scene screenshot
				of that movie or show where you want to know who that incredible
				actor/actress is. Save it and upload it here 😎
			</p>
			<ImageDetectionControl />
		</section>
	)
}

const FaceDetectionRoute = {
	path: "face-detection",
	element: <FaceDetection />,
	loader: async () => {
		const userData = await getUserData()
		if (!userData) return redirect("/")

		return userData
	},
	action: incrementEntry
}

export default FaceDetectionRoute
