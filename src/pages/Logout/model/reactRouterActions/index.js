import { redirect } from "react-router"
import { getReactRouterFormData } from "@/shared/utils/functions"
import logoutUser from "@/features/LogoutUser"

export const submitLogoutRequest = async ({ request }) => {
  try {
    const requestData = await getReactRouterFormData(request)
    const data = await logoutUser(requestData)

    if (data.status === "success") return redirect("/")

    return null
  } catch (err) {
    console.error(`Fetch error: ${err}`)
  }
}
