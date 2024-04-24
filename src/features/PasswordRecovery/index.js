import requestPasswordRecovery from "./api"

const passwordRecovery = async (fetchOptions) => {
  const response = await requestPasswordRecovery(fetchOptions)
  const data = await response.json()

  return data
}

export default passwordRecovery