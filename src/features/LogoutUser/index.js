import requestLogout from "./api"

const logoutUser = async requestData => {
  const fetchOptions = {
    method: "post",
    credentials: "include",
    body: requestData,
    headers: {
      "Content-type": "application/json"
    }
  }

  const response = await requestLogout(fetchOptions)
  const data = await response.json()

  return data
}

export default logoutUser
