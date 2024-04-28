import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestUserAuthenticationCheck = async (fetchOptions) => {
  const response =
    await fetch(`${SERVER_DOMAIN}/check-user-authentication`, fetchOptions)

  return response
}

export default requestUserAuthenticationCheck