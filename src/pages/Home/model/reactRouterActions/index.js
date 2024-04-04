import loginUser from "../../../../features/LoginUser"

export const submitLoginForm = async ({ request }) => {
  try {
    const reactRouterFetcherData = await request.formData()
    const formData =
      JSON.stringify(Object.fromEntries(reactRouterFetcherData))
    const fetchOptions = {
      method: request.method,
      credentials: 'include',
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = await loginUser(fetchOptions)

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