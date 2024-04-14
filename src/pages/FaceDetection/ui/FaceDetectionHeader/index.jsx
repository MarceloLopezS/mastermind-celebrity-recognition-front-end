import { useLoaderData } from "react-router-dom"
import styles from "./ui/styles.module.css"

const FaceDetectionHeader = () => {
	const { name, entries } = useLoaderData()

	return (
		<>
			<p className={styles["user-welcome"]}>
				Welcome, {name}. Your current detection count is:
			</p>
			<p className={styles.entries}>{entries}</p>
		</>
	)
}

export default FaceDetectionHeader
