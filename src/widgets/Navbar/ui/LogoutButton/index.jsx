import { useCallback } from "react"
import { useFetcher } from "react-router-dom"
import DoubleSquareLoader from "../../../../shared/ui/DoubleSquareLoader"

const LogoutButton = () => {
	const fetcher = useFetcher()

	const submitDataToFetcher = useCallback(() => {
		const data = {
			requestAction: "logout"
		}
		const options = {
			method: "post",
			action: "/logout"
		}
		fetcher.submit(data, options)
	}, [])

	return (
		<>
			<DoubleSquareLoader isShown={fetcher.state === "submitting"} />
			<button onClick={submitDataToFetcher} type="button">
				Log Out
			</button>
		</>
	)
}

export default LogoutButton
