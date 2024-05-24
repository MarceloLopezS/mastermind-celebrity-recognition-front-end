import { redirect } from "react-router-dom"
import WithAuthRedirection from "../../widgets/WithAuthRedirection"
import getUserData from "../../features/GetUserData"
import { submitEntryIncrementRequest } from "./model/ReactRouterActions"
import FaceDetectionHeader from "./ui/FaceDetectionHeader"
import FaceDetectionInstructions from "./ui/FaceDetectionInstructions"
import FaceDetectionControl from "./ui/FaceDetectionControl"
import styles from "./ui/styles.module.css"

const FaceDetection = () => {
	return (
		<section className={`${styles["face-detection"]} | container`}>
			<FaceDetectionHeader />
			<FaceDetectionInstructions />
			<FaceDetectionControl />
		</section>
	)
}

const WithAuthRedirectionFaceDetection = () => {
	return (
		<WithAuthRedirection
			resolveRedirectPath={isUserAuthenticated =>
				!isUserAuthenticated ? "/" : null
			}
		>
			<FaceDetection />
		</WithAuthRedirection>
	)
}

const FaceDetectionRoute = {
	path: "face-detection",
	element: <WithAuthRedirectionFaceDetection />,
	loader: async () => {
		try {
			const userData = await getUserData()

			if (!userData) return redirect("/")

			return userData
		} catch (err) {
			console.error(err)
			return redirect("/")
		}
	},
	action: submitEntryIncrementRequest
}

export default FaceDetectionRoute
