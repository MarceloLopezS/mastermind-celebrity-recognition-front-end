import { useState, useCallback, useMemo, useEffect } from "react"
import { preloadImage } from "@/shared/utils/functions"
import getDemoDetectionData from "@/features/GetDemoDetectionData"
import { SCREEN_BREAKPOINTS } from "../../config"

const DEFAULT_DETECTION_ERROR =
  "There was a problem retrieving the detection data."

export const useFaceDetectionDemo = (demoThumbnailsArr = []) => {
  const FIRST_DEMO_THUMBNAIL = useMemo(
    () =>
      demoThumbnailsArr.reduce((acc, thumbnail) =>
        thumbnail?.demoId === 0 ? thumbnail : acc
      ),
    [demoThumbnailsArr]
  )

  const [selectedThumbnailId, setSelectedThumbnailId] = useState(
    FIRST_DEMO_THUMBNAIL?.demoId
  )
  const [isRequestLoading, setIsRequestLoading] = useState(false)
  const [detectionData, setDetectionData] = useState(null)
  const [detectionError, setDetectionError] = useState(null)

  const clearDetectionState = useCallback(() => {
    setDetectionData(null)
    setDetectionError(null)
  }, [])

  const handleDetectionDataRecieval = useCallback(detectionData => {
    setDetectionData(detectionData)
    setDetectionError(null)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    const handleThumbnailDetection = async demoId => {
      try {
        setIsRequestLoading(true)
        clearDetectionState()

        const data = await getDemoDetectionData(demoId, controller)

        if (data.status === "success") {
          handleDetectionDataRecieval(data.detectionData)
        }

        if (data.status === "fail") setDetectionError(data.fail.message)
      } catch (err) {
        console.error(`Fetch error: ${err}`)
        setDetectionError(DEFAULT_DETECTION_ERROR)
      } finally {
        setIsRequestLoading(false)
      }
    }

    const currentDemo = demoThumbnailsArr.reduce((acc, thumbnail) =>
      thumbnail?.demoId === selectedThumbnailId ? thumbnail : acc
    )
    handleThumbnailDetection(currentDemo?.demoId)

    return () => {
      controller.abort()
    }
  }, [selectedThumbnailId])

  return {
    selectedThumbnailId,
    setSelectedThumbnailId,
    isRequestLoading,
    detectionData,
    detectionError
  }
}

export const useSelectedThumbnailsPreloader = demoThumbnailsArr => {
  useEffect(() => {
    const preloadSelectedThumbnails = async () => {
      const preloadPromises = demoThumbnailsArr.map(async demoThumbnail => {
        const srcToPreload = demoThumbnail?.selectedThumbnailSrcSet?.reduce(
          (acc, srcSetData) => {
            if (
              window.matchMedia(`(max-width: ${SCREEN_BREAKPOINTS.sm})`)
                .matches &&
              srcSetData?.width === 500
            )
              return srcSetData

            if (
              !window.matchMedia(`(max-width: ${SCREEN_BREAKPOINTS.sm})`)
                .matches &&
              srcSetData?.width === 600
            )
              return srcSetData

            return acc
          },
          ""
        )?.src

        return preloadImage(srcToPreload)
      })

      try {
        await Promise.allSettled(preloadPromises)
      } catch (err) {
        console.error(`Preload error: ${err}`)
      }
    }

    preloadSelectedThumbnails()
  }, [demoThumbnailsArr])

  return null
}
