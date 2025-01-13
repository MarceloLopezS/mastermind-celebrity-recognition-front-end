import incrementUserDetectionEntry from "@/features/IncrementUserDetectionEntry"
import { getReactRouterFormData } from "@/shared/utils/functions"

export const submitEntryIncrementRequest = async ({ request }) => {
  try {
    const requestData = await getReactRouterFormData(request)
    const data = await incrementUserDetectionEntry(requestData)

    if (!data) return null
    if (data.status === "success") return null
    if (data.status === "fail") return null
  } catch (err) {
    console.error(`Fetch error: ${err}`)
    return null
  }
}
