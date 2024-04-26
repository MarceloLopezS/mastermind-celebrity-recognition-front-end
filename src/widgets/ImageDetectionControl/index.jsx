import { useState, useRef, useCallback } from "react"
import { useFetcher } from "react-router-dom"
import getDetectionData from "../../features/GetDetectionData"
import { isFileInputValid } from "../../shared/utils/functions"
import Form, { useInputValidationHandler } from "../../shared/ui/Form"
import FileInput from "../../shared/ui/FileInput"
import PictureLandscapeSVG from "../../shared/ui/SVGs/PictureLandscape"
import ImageDetectionContainer from "./ui/ImageContainer"
import styles from "./ui/styles.module.css"

const INITIAL_SRC = "#"

const ImageDetectionControl = () => {
	const fetcher = useFetcher()
	const fileHandler = useInputValidationHandler(isFileInputValid)
	const [isImageVisible, setIsImageVisible] = useState(false)
	const [imageSrc, setImageSrc] = useState(INITIAL_SRC)
	const [isRequestLoading, setIsRequestLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)
	const [detectionData, setDetectionData] = useState()
	const lastValidImageSrc = useRef(INITIAL_SRC)

	const updateImageDisplay = useCallback(
		event => {
			setDetectionData(null)

			if (event.target.files.length === 0) {
				isImageVisible && setIsImageVisible(false)
				imageSrc !== INITIAL_SRC && setImageSrc(INITIAL_SRC)
				return
			}

			const src = URL.createObjectURL(event.target.files[0])
			imageSrc !== src && setImageSrc(src)
			!isImageVisible && setIsImageVisible(true)
		},
		[isImageVisible, imageSrc]
	)

	const handleDetectionRequest = useCallback(
		async event => {
			event.preventDefault()

			const isFormValid =
				imageSrc !== lastValidImageSrc.current && fileHandler.validate()

			if (!isFormValid) return

			lastValidImageSrc.current = imageSrc
			setDetectionData(null)
			setIsRequestLoading(true)
			setErrorMessage(null)

			const formData = new FormData()
			formData.append("image-input", fileHandler.inputRef.current.files[0])
			try {
				const data = await getDetectionData(formData)

				setIsRequestLoading(false)
				if (!data || data.status === "unauthorized" || data.status === "fail")
					return setErrorMessage(
						"There was a problem retrieving the detection data."
					)

				if (data.status === "success") {
					setDetectionData(data.detectionData)

					const requestData = {
						request: "increment-entry"
					}
					const options = {
						method: "put",
						action: "/face-detection"
					}
					return fetcher.submit(requestData, options)
				}
			} catch (err) {
				console.error(`Fetch error: ${err}`)
				return setIsRequestLoading(false)
			}
		},
		[imageSrc]
	)

	return (
		<>
			<Form
				className={styles["detection-form"]}
				encType="multipart/form-data"
				onSubmit={handleDetectionRequest}
			>
				<FileInput
					ref={fileHandler.inputRef}
					onChange={updateImageDisplay}
					fileTypeIndicator={
						<PictureLandscapeSVG className={styles["input-icon"]} />
					}
					inputDescription="First upload an image"
					acceptedFileTypes={["image/jpg", "image/jpeg", "image/png"]}
				/>
				<button type="submit" disabled={isRequestLoading}>
					Detect
				</button>
			</Form>
			<ImageDetectionContainer
				isVisible={isImageVisible}
				isLoading={isRequestLoading}
				detectionData={detectionData}
				className={styles["image-container"]}
				errorMessage={isRequestLoading ? null : errorMessage}
			>
				<img src={imageSrc} alt="Input to detect"></img>
			</ImageDetectionContainer>
		</>
	)
}

export default ImageDetectionControl
