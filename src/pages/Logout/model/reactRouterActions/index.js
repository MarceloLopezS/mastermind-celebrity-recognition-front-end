import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "../../../../shared/utils/functions"
import logoutUser from "../../../../features/LogoutUser"

export const submitLogoutRequest = async ({ request }) => {
  try {
    const requestData = await getReactRouterFormData(request)
    const fetchOptions = {
      method: request.method,
      credentials: 'include',
      body: requestData,
      headers: {
        'Content-type': 'application/json'
      }
    }

    const data = await logoutUser(fetchOptions)

    if (data.status === "success") return redirect("/")

    return null
  } catch (err) {
    console.error(`Fetch error: ${err}`)
  }
}