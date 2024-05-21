import demoImg0 from "../../../../shared/assets/images/demo-thumbnail-0.webp"
import demoImg1 from "../../../../shared/assets/images/demo-thumbnail-1.webp"
import demoImg2 from "../../../../shared/assets/images/demo-thumbnail-2.webp"
import demoImg3 from "../../../../shared/assets/images/demo-thumbnail-3.webp"
import demoImg4 from "../../../../shared/assets/images/demo-thumbnail-4.webp"
import demoImg5 from "../../../../shared/assets/images/demo-thumbnail-5.webp"
import { useFaceDetectionDemo } from "./model/hooks"
import ImageDetectionContainer from "../../../../widgets/ImageDetectionContainer"
import styles from "./ui/styles.module.css"

const DEMO_THUMBNAILS = [
	{ demoId: 0, src: demoImg0 },
	{ demoId: 1, src: demoImg1 },
	{ demoId: 2, src: demoImg2 },
	{ demoId: 3, src: demoImg3 },
	{ demoId: 4, src: demoImg4 },
	{ demoId: 5, src: demoImg5 }
]

const HeroDemo = () => {
	const {
		currentImageSrc,
		setCurrentImageSrc,
		isRequestLoading,
		detectionData,
		detectionError
	} = useFaceDetectionDemo(DEMO_THUMBNAILS)

	return (
		<section className={styles["hero__demo--container"]}>
			<div className={`${styles["hero__demo"]} | box-shadow--app-theme`}>
				<section className={styles["demo-thumbnails--container"]}>
					{DEMO_THUMBNAILS.map(demoThumbnail => (
						<button
							key={demoThumbnail.demoId}
							onClick={() => setCurrentImageSrc(demoThumbnail.src)}
							type="button"
							className={styles["demo-thumbnail"]}
							tabIndex={demoThumbnail.src === currentImageSrc ? -1 : null}
							data-selected={
								demoThumbnail.src === currentImageSrc ? true : null
							}
						>
							<span className="sr-only">{`Thumbnail number ${
								demoThumbnail.demoId + 1
							}`}</span>
							<img
								src={demoThumbnail.src}
								alt="Demo thumbnail"
								draggable={false}
							/>
						</button>
					))}
				</section>
				<div className={styles["demo-detection--container"]}>
					<ImageDetectionContainer
						className={styles["demo-detection"]}
						detectionData={detectionData}
						errorMessage={detectionError}
						isLoading={isRequestLoading}
					>
						<img
							src={currentImageSrc}
							alt="Current demo image"
							draggable={false}
						/>
					</ImageDetectionContainer>
				</div>
			</div>
		</section>
	)
}

export default HeroDemo
