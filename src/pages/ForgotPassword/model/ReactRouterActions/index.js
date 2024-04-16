import passwordRecovery from "../../../../features/PasswordRecovery"
import { getReactRouterFormData } from "../../../../shared/utils/functions"

export const submitForgotPasswordForm = async ({ request }) => {
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

    const data = passwordRecovery(fetchOptions)

    return data
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