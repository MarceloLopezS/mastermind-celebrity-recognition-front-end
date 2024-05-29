import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestEntryIncrement = async (fetchOptions) => {
  const response = await fetch(
    `${API_ROOT_URL}/face-detection/increment-entry`,
    fetchOptions
  )

  return response
}

export default requestEntryIncrement