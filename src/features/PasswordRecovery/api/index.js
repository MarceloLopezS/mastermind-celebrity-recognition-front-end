import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestPasswordRecovery = async (fetchOptions) => {
  const response = await fetch(`${SERVER_DOMAIN}/forgot-password`, fetchOptions)

  return response
}

export default requestPasswordRecovery