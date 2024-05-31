import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "@/shared/utils/functions"
import passwordReset from "@/features/PasswordReset"

export const submitPasswordResetForm = async ({ request }) => {
  try {
    const formData = await getReactRouterFormData(request)
    const data = await passwordReset(formData)

    if (data.status !== "success") return data

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