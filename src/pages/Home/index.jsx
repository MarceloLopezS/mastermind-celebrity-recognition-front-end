import HeroDescription from "./ui/HeroDescription"
import HeroDemo from "./ui/HeroDemo"
import styles from "./ui/styles.module.css"

const Home = () => {
  return (
    <section className={`${styles["hero"]} | container`}>
      <HeroDescription />
      <HeroDemo />
    </section>
  )
}

const HomeRoute = {
  element: <Home />
}

export default HomeRoute
