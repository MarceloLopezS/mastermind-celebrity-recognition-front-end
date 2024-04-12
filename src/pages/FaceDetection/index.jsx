import { useState, useRef, useCallback } from "react"
import { useFetcher, useLoaderData, redirect } from "react-router-dom"
import { getUserData } from "../../controllers/ReactRouterLoaders/loaders"
import { incrementEntry } from "../../controllers/ReactRouterActions/actions"
import { isFileInputValid } from "../../shared/utils/functions"
import getDetectionData from "../../features/GetDetectionData"
import Form, { useInputValidationHandler } from "../../shared/ui/Form"
import PictureLandscapeSVG from "../../shared/ui/SVGs/PictureLandscape"
import ImageDetectionContainer from "./ui/ImageContainer"
import "./ui/styles.css"

const INITIAL_SRC = "#"

const FaceDetection = () => {
	const { name, entries } = useLoaderData()
	const fetcher = useFetcher()
	const fileHandler = useInputValidationHandler(isFileInputValid)
	const [isImageVisible, setIsImageVisible] = useState(false)
	const [imageSrc, setImageSrc] = useState(INITIAL_SRC)
	const [isRequestLoading, setIsRequestLoading] = useState(false)
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

			const formData = new FormData()
			formData.append("image-input", fileHandler.inputRef.current.files[0])
			try {
				const data = await getDetectionData(formData)

				setIsRequestLoading(false)
				if (!data || data.status === "unauthorized" || data.status === "fail")
					return

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
		<section className="face-detection container">
			<p className="face-detection__user-welcome">
				Welcome, {name}. Your current detection count is:
			</p>
			<p className="face-detection__count">{entries}</p>
			<h2>
				You can upload an image to recognize celebrities using an AI model,
				trained with <span className="text-highlight">10 553</span> concepts.
			</h2>
			<p className="secondary-text">
				<span className="text-highlight">A Hint?</span> Take a scene screenshot
				of that movie or show where you want to know who that incredible
				actor/actress is. Save it and upload it here 😎
			</p>
			<Form
				className="face-detection__form"
				encType="multipart/form-data"
				onSubmit={handleDetectionRequest}
			>
				<label className="custom-file-input">
					<input
						ref={fileHandler.inputRef}
						type="file"
						name="image-input"
						accept="image/jpg, image/jpeg, image/png"
						onChange={updateImageDisplay}
					></input>
					<PictureLandscapeSVG />
					First upload an image
				</label>
				<button type="submit">Detect</button>
			</Form>
			<ImageDetectionContainer
				isVisible={isImageVisible}
				isLoading={isRequestLoading}
				detectionData={detectionData}
			>
				<img src={imageSrc} alt="Input to detect"></img>
			</ImageDetectionContainer>
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
