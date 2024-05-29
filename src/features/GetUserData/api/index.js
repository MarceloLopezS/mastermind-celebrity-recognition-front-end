import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestUserData = async (fetchOptions) => {
  const response = await fetch(`${API_ROOT_URL}/user-info`, fetchOptions)

  return response
}

export default requestUserData