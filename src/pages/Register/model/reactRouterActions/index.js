import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "../../../../shared/utils/functions"
import registerUser from "../../../../features/registerUser"

export const submitRegisterForm = async ({ request }) => {
  try {
    const formData = await getReactRouterFormData(request)
    const data = await registerUser(formData)

    if (data.status !== "success") return data

    return redirect("/email-verification")
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