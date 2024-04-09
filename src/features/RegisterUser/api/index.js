import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestRegistration = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/register`, fetchOptions)
  const data = await response.json()

  return data
}

export default requestRegistration