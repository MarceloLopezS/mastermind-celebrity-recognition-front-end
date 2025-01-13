import { capitalizeString } from "@/shared/utils/functions"
import styles from "./ui/styles.module.css"

const DetectionBoundingBox = ({ detectionData }) => {
  return detectionData
    ? detectionData.map(detection => {
        const { top_row, right_col, bottom_row, left_col } =
          detection.boundingBox
        const { name, probability } = detection.faceDetection
        return (
          <div
            key={name}
            className={styles["boundingBox"]}
            style={{
              top: `${top_row * 100}%`,
              right: `${100 - right_col * 100}%`,
              bottom: `${100 - bottom_row * 100}%`,
              left: `${left_col * 100}%`
            }}
          >
            <span className={styles["detection-name"]}>
              {capitalizeString(name)} | {Math.floor(probability * 100)}%
            </span>
          </div>
        )
      })
    : null
}

export default DetectionBoundingBox
