import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestDetectionData = async (fetchOptions) => {
  const response = await fetch(
    `${SERVER_DOMAIN}/face-detection`,
    fetchOptions
  )
  const data = await response.json()

  return data
}

export default requestDetectionData