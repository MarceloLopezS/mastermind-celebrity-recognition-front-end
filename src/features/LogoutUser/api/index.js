import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestLogout = async fetchOptions => {
  const response = await fetch(`${API_ROOT_URL}/logout`, fetchOptions)

  return response
}

export default requestLogout
