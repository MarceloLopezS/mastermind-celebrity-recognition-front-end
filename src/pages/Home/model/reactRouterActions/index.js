import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "../../../../shared/utils/functions"
import loginUser from "../../../../features/LoginUser"

export const submitLoginForm = async ({ request }) => {
  try {
    const formData = await getReactRouterFormData(request)
    const fetchOptions = {
      method: request.method,
      credentials: 'include',
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const serverResponse = await loginUser(fetchOptions)

    if (serverResponse.status !== "success") return serverResponse

    return redirect("/face-detection")
  } catch (err) {
    console.error(`Fetch error: ${err}`)
    return {
      status: "client-error",
      clientError: {
        message: 'We were not able to process the request. Please try again in a few moments.'
      }
    }
  }
}