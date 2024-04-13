import DoubleSquareLoader from "../../../../shared/ui/DoubleSquareLoader"
import DetectionBoundingBox from "../../../../entities/DetectionBoundingBox"
import styles from "./ui/styles.module.css"

const ImageDetectionContainer = ({
	children,
	isVisible = true,
	isLoading = false,
	detectionData,
	...attributes
}) => {
	return (
		<div data-show={isVisible ? true : null} {...attributes}>
			{children}
			<DoubleSquareLoader
				isShown={isLoading}
				className={styles["detection-loader"]}
			/>
			<DetectionBoundingBox detectionData={detectionData} />
		</div>
	)
}

export default ImageDetectionContainer
