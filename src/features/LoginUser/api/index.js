import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestLogin = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/login`, fetchOptions)
  const data = await response.json()

  return data
}

export default requestLogin