import styles from "./ui/styles.module.css"

const DoubleSquareLoader = ({ isShown, className, ...attributes }) => (
	<span
		className={`${styles["loader"]}${className ? " " + className : ""}`}
		data-show={isShown || null}
		{...attributes}
	></span>
)

export default DoubleSquareLoader
