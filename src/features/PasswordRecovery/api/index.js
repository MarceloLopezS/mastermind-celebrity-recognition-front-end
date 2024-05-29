import { API_ROOT_URL } from "../../../shared/utils/constants"

const requestPasswordRecovery = async (fetchOptions) => {
  const response = await fetch(`${API_ROOT_URL}/forgot-password`, fetchOptions)

  return response
}

export default requestPasswordRecovery