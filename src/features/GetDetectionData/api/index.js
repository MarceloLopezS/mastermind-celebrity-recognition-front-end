import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestDetectionData = async (fetchOptions) => {
  const response = await fetch(
    `${SERVER_DOMAIN}/face-detection`,
    fetchOptions
  )

  return response
}

export default requestDetectionData