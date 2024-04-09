import { forwardRef } from "react"
import styles from "./ui/styles.module.css"

const Input = forwardRef(({ isValid = true, ...attributes }, ref) => {
	return (
		<input
			ref={ref}
			className={styles.input}
			{...attributes}
			data-invalid={!isValid ? true : null}
		/>
	)
})

export default Input
