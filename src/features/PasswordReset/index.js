import requestPasswordReset from "./api/index"

const passwordReset = async (fetchOptions) => {
  const response = await requestPasswordReset(fetchOptions)
  const data = await response.json()

  return data
}

export default passwordReset