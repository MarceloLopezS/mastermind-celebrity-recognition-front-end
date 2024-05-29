import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestPasswordReset = async (fetchOptions) => {
  const response = await fetch(`${API_ROOT_URL}/password-reset`, fetchOptions)

  return response
}

export default requestPasswordReset