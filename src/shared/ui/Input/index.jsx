import styles from "./ui/styles.module.css"

const Input = ({ isValid = true, ref, ...attributes }) => {
  return (
    <input
      ref={ref}
      className={styles.input}
      {...attributes}
      data-invalid={!isValid ? true : null}
    />
  )
}

export default Input
