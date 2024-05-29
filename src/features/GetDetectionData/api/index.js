import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestDetectionData = async (fetchOptions) => {
  const response = await fetch(
    `${API_ROOT_URL}/face-detection`,
    fetchOptions
  )

  return response
}

export default requestDetectionData