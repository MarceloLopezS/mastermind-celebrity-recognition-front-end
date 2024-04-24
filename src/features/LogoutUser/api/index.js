import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestLogout = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/logout`, fetchOptions)

  return response
}

export default requestLogout