import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestPasswordRecovery = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/forgot-password`, fetchOptions)
  const data = await response.json()

  return data
}

export default requestPasswordRecovery