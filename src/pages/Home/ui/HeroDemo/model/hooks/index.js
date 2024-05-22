import { useState, useCallback, useMemo, useEffect } from "react"
import getDemoDetectionData from "../../../../../../features/GetDemoDetectionData"

const DEFAULT_DETECTION_ERROR =
  "There was a problem retrieving the detection data."

export const useFaceDetectionDemo = (demoThumbnailsArr = []) => {
  const FIRST_DEMO_THUMBNAIL = useMemo(() => demoThumbnailsArr.reduce((acc, thumbnail) =>
    thumbnail?.demoId === 0 ? thumbnail : acc
  ), [demoThumbnailsArr])

  const [currentImageSrc, setCurrentImageSrc] = useState(
    FIRST_DEMO_THUMBNAIL?.src
  )
  const [isRequestLoading, setIsRequestLoading] = useState(false)
  const [detectionData, setDetectionData] = useState(null)
  const [detectionError, setDetectionError] = useState(null)

  const handleDetectionDataRecieval = useCallback(detectionData => {
    setDetectionData(detectionData)
    setDetectionError(null)
  }, [])

  useEffect(() => {
    const handleThumbnailDetection = async demoId => {
      try {
        setIsRequestLoading(true)
        setDetectionError(false)

        const data = await getDemoDetectionData(demoId)

        if (data.status === "success") {
          handleDetectionDataRecieval(data.detectionData)
        }

        if (data.status === "fail") setDetectionError(DEFAULT_DETECTION_ERROR)

        setIsRequestLoading(false)
      } catch (err) {
        console.error(`Fetch error: ${err}`)
        setIsRequestLoading(false)
        setDetectionError(DEFAULT_DETECTION_ERROR)
      }
    }

    const currentDemo = demoThumbnailsArr.reduce((acc, thumbnail) =>
      thumbnail?.src === currentImageSrc ? thumbnail : acc
    )
    handleThumbnailDetection(currentDemo?.demoId)
  }, [currentImageSrc])

  return {
    currentImageSrc,
    setCurrentImageSrc,
    isRequestLoading,
    detectionData,
    detectionError
  }
}