import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestUserAuthenticationCheck = async (fetchOptions) => {
  const response =
    await fetch(`${API_ROOT_URL}/check-user-authentication`, fetchOptions)

  return response
}

export default requestUserAuthenticationCheck