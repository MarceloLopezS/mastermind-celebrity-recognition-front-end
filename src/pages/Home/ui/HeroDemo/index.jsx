import { useState } from "react"
import demoImg0 from "../../../../shared/assets/images/demo-thumbnail-00.webp"
import demoImg1 from "../../../../shared/assets/images/demo-thumbnail-01.webp"
import demoImg2 from "../../../../shared/assets/images/demo-thumbnail-02.webp"
import demoImg3 from "../../../../shared/assets/images/demo-thumbnail-03.webp"
import demoImg4 from "../../../../shared/assets/images/demo-thumbnail-04.webp"
import demoImg5 from "../../../../shared/assets/images/demo-thumbnail-05.webp"
import ImageDetectionContainer from "../../../../widgets/ImageDetectionContainer"
import styles from "./ui/styles.module.css"

const DEMO_IMG_SOURCES = [
	demoImg0,
	demoImg1,
	demoImg2,
	demoImg3,
	demoImg4,
	demoImg5
]

const HeroDemo = () => {
	const [currentImageSrc, setCurrentImageSrc] = useState(DEMO_IMG_SOURCES[0])

	return (
		<section className={`${styles["hero__demo"]} | box-shadow--app-theme`}>
			<section className={styles["demo-thumbnails--container"]}>
				{DEMO_IMG_SOURCES.map((demoImgSrc, index) => (
					<button
						type="button"
						className={styles["demo-thumbnail"]}
						tabIndex={demoImgSrc === currentImageSrc ? -1 : null}
						data-selected={demoImgSrc === currentImageSrc ? true : null}
					>
						<span className="sr-only">{`Thumbnail number ${index + 1}`}</span>
						<img
							key={demoImgSrc}
							src={demoImgSrc}
							alt="Demo thumbnail"
							draggable={false}
						/>
					</button>
				))}
			</section>
			<ImageDetectionContainer className={styles["demo-detection--container"]}>
				<img src={currentImageSrc} alt="Current demo image" draggable={false} />
			</ImageDetectionContainer>
		</section>
	)
}

export default HeroDemo
