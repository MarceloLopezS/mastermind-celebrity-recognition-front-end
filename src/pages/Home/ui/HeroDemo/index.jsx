import { useState } from "react"
import ImageDetectionContainer from "../../../../widgets/ImageDetectionContainer"
import styles from "./ui/styles.module.css"

const DEMO_IMG_SOURCES = []

const HeroDemo = () => {
	const [currentImageSrc, setCurrentImageSrc] = useState(DEMO_IMG_SOURCES[0])

	return (
		<section className={`${styles["hero__demo"]} | shadow-app-theme`}>
			<div className={styles["hero__demo--container"]}>
				<section className={styles["hero__demo-options"]}></section>
				<ImageDetectionContainer
					className={styles["hero__demo-detection--container"]}
				>
					<img src={currentImageSrc} alt="Current demo image" />
				</ImageDetectionContainer>
			</div>
		</section>
	)
}

export default HeroDemo
