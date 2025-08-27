import GithubSVG from "../SVGs/Github"
import MailSVG from "../SVGs/Mail"
import AboutSVG from "../SVGs/About"
import styles from "./ui/styles.module.css"

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["contact-info"]}>
        <span>Developed by: </span>
        <a
          className={styles["contact-info__link"]}
          href="https://github.com/MarceloLopezS"
          target="_blank"
          rel="noreferrer"
        >
          <GithubSVG />
          MarceloLopezS
        </a>
        <a
          className={styles["contact-info__link"]}
          href="https://github.com/MarceloLopezS/face-detection-app-back-end"
          target="_blank"
          rel="noreferrer"
        >
          <AboutSVG />
          About this project
        </a>
      </div>
    </footer>
  )
}

export default Footer
