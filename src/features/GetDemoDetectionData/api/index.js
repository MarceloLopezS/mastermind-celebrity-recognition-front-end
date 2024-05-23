import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestDemoDetectionData = async (fetchOptions, abortController) => {
  const signal = abortController?.signal

  const response = await fetch(
    `${SERVER_DOMAIN}/demo-face-detection`,
    signal != null ? { ...fetchOptions, signal } : fetchOptions
  )

  return response
}

export default requestDemoDetectionData