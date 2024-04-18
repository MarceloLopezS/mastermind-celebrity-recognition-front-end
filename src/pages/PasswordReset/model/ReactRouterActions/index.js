import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "../../../../shared/utils/functions"
import passwordReset from "../../../../features/PasswordReset"

export const submitPasswordResetForm = async ({ request }) => {
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

    const serverResponse = await passwordReset(fetchOptions)

    if (serverResponse.status !== "success") return serverResponse

    return redirect("/password-reset/reset-success")
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