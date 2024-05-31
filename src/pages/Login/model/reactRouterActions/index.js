import { redirect } from "react-router-dom"
import { getReactRouterFormData } from "@/shared/utils/functions"
import loginUser from "@/features/LoginUser"

export const submitLoginForm = async ({ request }) => {
  try {
    const formData = await getReactRouterFormData(request)
    const data = await loginUser(formData)

    if (data.status !== "success") return data

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