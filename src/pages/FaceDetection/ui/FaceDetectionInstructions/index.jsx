import styles from "./ui/styles.module.css"

const FaceDetectionInstructions = () => {
  return (
    <>
      <h2 className={styles["instructions-heading"]}>
        You can upload an image to recognize celebrities using an AI model,
        trained with <span className="text-highlight">10 553</span> concepts.
      </h2>
      <p className={`${styles.hint} secondary-text`}>
        <span className="text-highlight">A Hint?</span> Take a scene screenshot
        of that movie or show where you want to know who that incredible
        actor/actress is. Save it and upload it here 😎
      </p>
    </>
  )
}

export default FaceDetectionInstructions
