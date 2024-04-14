import { redirect } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { incrementEntry } from "../../controllers/ReactRouterActions/actions"
import ImageDetectionControl from "../../widgets/ImageDetectionControl"
import FaceDetectionHeader from "./ui/FaceDetectionHeader"
import FaceDetectionInstructions from "./ui/FaceDetectionInstructions"
import styles from "./ui/styles.module.css"

const FaceDetection = () => {
	return (
		<section className={`${styles["face-detection"]} | container`}>
			<FaceDetectionHeader />
			<FaceDetectionInstructions />
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
