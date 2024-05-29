import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestRegistration = async (fetchOptions) => {
  const response = await fetch(`${API_ROOT_URL}/register`, fetchOptions)

  return response
}

export default requestRegistration