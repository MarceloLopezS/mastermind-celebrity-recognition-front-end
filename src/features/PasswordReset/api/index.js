import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestPasswordReset = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/password-reset`, fetchOptions)
  const data = await response.json()

  return data
}

export default requestPasswordReset