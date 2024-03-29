import styles from "./ui/styles.module.css"

const DoubleSquareLoader = ({ isShown, ...attributes }) => (
	<span
		className={styles["loader"]}
		data-show={isShown || null}
		{...attributes}
	></span>
)

export default DoubleSquareLoader
