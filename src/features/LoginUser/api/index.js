import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestLogin = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/login`, fetchOptions)

  return response
}

export default requestLogin