import requestRegistration from "./api"

const registerUser = async (fetchOptions) => {
  const serverResponse = await requestRegistration(fetchOptions)

  return serverResponse
}

export default registerUser