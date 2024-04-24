import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestUserData = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/user-info`, fetchOptions)

  return response
}

export default requestUserData