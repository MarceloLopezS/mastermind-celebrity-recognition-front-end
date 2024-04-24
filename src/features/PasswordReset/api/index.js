import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestPasswordReset = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/password-reset`, fetchOptions)

  return response
}

export default requestPasswordReset