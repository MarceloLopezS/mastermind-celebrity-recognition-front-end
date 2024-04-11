import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestDetectionData = async (formData) => {
  const fetchOptions = {
    method: "POST",
    credentials: "include",
    body: formData
  }

  const serverResponse = await fetch(
    `${SERVER_DOMAIN}/face-detection`,
    fetchOptions
  )
  const data = await serverResponse.json()

  return data
}

export default requestDetectionData