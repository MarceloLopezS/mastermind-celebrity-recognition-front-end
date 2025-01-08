import styles from "./ui/styles.module.css"

const FileInput = ({
  fileTypeIndicator = React.Fragment,
  inputDescription = "",
  acceptedFileTypes = [],
  className,
  ref,
  ...attributes
}) => {
  return (
    <label
      className={`${styles["custom-file-input"]}${
        className ? " " + className : ""
      }`}
    >
      <input
        ref={ref}
        type="file"
        name="image-input"
        accept={acceptedFileTypes.join(", ")}
        {...attributes}
      ></input>
      {fileTypeIndicator}
      {inputDescription}
    </label>
  )
}

export default FileInput
