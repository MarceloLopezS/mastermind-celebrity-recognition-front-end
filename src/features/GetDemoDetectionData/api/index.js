import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestDemoDetectionData = async (fetchOptions) => {
  const response = await fetch(
    `${SERVER_DOMAIN}/demo-face-detection`,
    fetchOptions
  )

  return response
}

export default requestDemoDetectionData