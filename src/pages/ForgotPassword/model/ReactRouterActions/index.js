import passwordRecovery from "@/features/PasswordRecovery"
import { getReactRouterFormData } from "@/shared/utils/functions"

export const submitForgotPasswordForm = async ({ request }) => {
  try {
    const formData = await getReactRouterFormData(request)
    const data = await passwordRecovery(formData)

    return data
  } catch (err) {
    console.error(`Fetch error: ${err}`)
    return {
      status: "client-error",
      clientError: {
        message:
          "We were not able to process the request. Please try again in a few moments."
      }
    }
  }
}
