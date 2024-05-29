import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestDemoDetectionData = async (fetchOptions, abortController) => {
  const signal = abortController?.signal

  const response = await fetch(
    `${API_ROOT_URL}/demo-face-detection`,
    signal != null ? { ...fetchOptions, signal } : fetchOptions
  )

  return response
}

export default requestDemoDetectionData