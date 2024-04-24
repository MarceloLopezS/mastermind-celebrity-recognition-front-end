import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestRegistration = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/register`, fetchOptions)

  return response
}

export default requestRegistration