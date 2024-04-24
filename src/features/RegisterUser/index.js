import requestRegistration from "./api"

const registerUser = async (fetchOptions) => {
  const response = await requestRegistration(fetchOptions)
  const data = await response.json()

  return data
}

export default registerUser