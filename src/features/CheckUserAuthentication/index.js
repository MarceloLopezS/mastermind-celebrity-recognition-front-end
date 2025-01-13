import requestUserAuthenticationCheck from "./api"

const checkUserAuthentication = async () => {
  const fetchOptions = {
    method: "get",
    credentials: "include"
  }

  const response = await requestUserAuthenticationCheck(fetchOptions)
  const data = await response.json()

  return data
}

export default checkUserAuthentication
