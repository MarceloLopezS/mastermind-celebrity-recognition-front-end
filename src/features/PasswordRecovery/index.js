import requestPasswordRecovery from "./api"

const passwordRecovery = async (fetchOptions) => {
  const data = await requestPasswordRecovery(fetchOptions)

  return data
}

export default passwordRecovery