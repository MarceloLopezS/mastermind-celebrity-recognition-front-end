import requestLogout from "./api"

const logoutUser = async (fetchOptions) => {
  const data = await requestLogout(fetchOptions)

  return data
}

export default logoutUser