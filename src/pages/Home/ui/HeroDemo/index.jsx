import { DEMO_THUMBNAILS } from "./config"
import { useFaceDetectionDemo } from "./model/hooks"
import ImageDetectionContainer from "../../../../widgets/ImageDetectionContainer"
import styles from "./ui/styles.module.css"

const SCREEN_BREAKPOINTS = {
	sm: "69rem"
}

const HeroDemo = () => {
	const {
		selectedThumbnailId,
		setSelectedThumbnailId,
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
							onClick={() => setSelectedThumbnailId(demoThumbnail.demoId)}
							type="button"
							className={styles["demo-thumbnail"]}
							tabIndex={
								demoThumbnail.demoId === selectedThumbnailId ? -1 : null
							}
							data-selected={
								demoThumbnail.demoId === selectedThumbnailId ? true : null
							}
						>
							<span className="sr-only">{`Thumbnail number ${
								demoThumbnail.demoId + 1
							}`}</span>
							<img
								src={
									demoThumbnail?.selectedThumbnailSrcSet?.reduce(
										(acc, srcSetData) => {
											if (srcSetData?.width > acc?.width) return srcSetData
											return acc
										}
									)?.src
								}
								srcSet={demoThumbnail?.thumbnailSrcSet?.reduce(
									(acc, item, i) => {
										if (i === 0) return `${item.src} ${item.width}w`
										return `${acc}, ${item.src} ${item.width}w`
									},
									{}
								)}
								sizes={`(max-width: ${SCREEN_BREAKPOINTS.sm}) 85px, 100px`}
								alt="Demo thumbnail"
								loading="lazy"
								decoding="async"
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
							src={
								DEMO_THUMBNAILS?.reduce((acc, demoThumbnail) => {
									return demoThumbnail?.demoId === selectedThumbnailId
										? demoThumbnail
										: acc
								})?.selectedThumbnailSrcSet?.reduce((acc, srcSetData) => {
									if (srcSetData?.width > acc?.width) return srcSetData
									return acc
								})?.src
							}
							srcSet={DEMO_THUMBNAILS?.reduce((acc, item) => {
								return item?.demoId === selectedThumbnailId ? item : acc
							})?.selectedThumbnailSrcSet?.reduce((acc, item, i) => {
								if (i === 0) return `${item?.src} ${item?.width}w`
								return `${acc}, ${item?.src} ${item?.width}w`
							}, {})}
							sizes={`(max-width: ${SCREEN_BREAKPOINTS.sm}) 500px, 600px`}
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
