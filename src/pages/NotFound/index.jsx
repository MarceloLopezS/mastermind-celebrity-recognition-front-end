import { Link } from "react-router"
import styles from "./ui/styles.module.css"

const NotFound = () => {
  return (
    <section className={`${styles["not-found-section"]} | container`}>
      <h1>404</h1>
      <p>
        Page not found 🫤 Go back to{" "}
        <span className="text-highlight">
          <Link to="/">home.</Link>
        </span>
      </p>
    </section>
  )
}

const NotFoundRoute = {
  path: "/*",
  element: <NotFound />
}

export default NotFoundRoute
