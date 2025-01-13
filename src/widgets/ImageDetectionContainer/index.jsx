import DoubleSquareLoader from "@/shared/ui/DoubleSquareLoader"
import DetectionBoundingBox from "@/entities/DetectionBoundingBox"
import styles from "./ui/styles.module.css"

const ImageDetectionContainer = ({
  children,
  isVisible = true,
  isLoading = false,
  detectionData,
  errorMessage = "",
  className,
  ...attributes
}) => {
  return (
    <div
      className={`${styles["detection-container"]}${
        className ? " " + className : ""
      }`}
      data-show={isVisible ? true : null}
      {...attributes}
    >
      {children}
      <DoubleSquareLoader
        isShown={isLoading}
        className={styles["detection-loader"]}
      />
      <div
        className={`${styles["error-message"]} | text-highlight`}
        data-show={errorMessage ? true : null}
      >
        {errorMessage || null}
      </div>
      <DetectionBoundingBox detectionData={detectionData} />
    </div>
  )
}

export default ImageDetectionContainer
