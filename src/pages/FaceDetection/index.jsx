import { redirect } from "react-router-dom"
import getUserData from "../../features/getUserData"
import ImageDetectionControl from "../../widgets/ImageDetectionControl"
import { submitEntryIncrementRequest } from "./model/ReactRouterActions"
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
		try {
			const userData = await getUserData()

			if (!userData) return redirect("/")

			return userData
		} catch (err) {
			console.error(err)
			return null
		}
	},
	action: submitEntryIncrementRequest
}

export default FaceDetectionRoute
