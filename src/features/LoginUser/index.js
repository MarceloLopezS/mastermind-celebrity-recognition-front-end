import requestLogin from "./api"

const loginUser = async (fetchOptions) => {
  const serverResponse = await requestLogin(fetchOptions)

  return serverResponse
}

export default loginUser