import requestPasswordReset from "./api/index"

const passwordReset = async (fetchOptions) => {
  const data = await requestPasswordReset(fetchOptions)

  return data
}

export default passwordReset