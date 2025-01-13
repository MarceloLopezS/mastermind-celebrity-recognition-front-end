import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestLogin = async fetchOptions => {
  const response = await fetch(`${API_ROOT_URL}/login`, fetchOptions)

  return response
}

export default requestLogin
