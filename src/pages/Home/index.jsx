import HeroDescription from "./ui/HeroDescription"
import styles from "./ui/styles.module.css"

const Home = () => {
	return (
		<section className={styles["hero"]}>
			<HeroDescription />
			<section></section>
		</section>
	)
}

const HomeRoute = {
	element: <Home />
}

export default HomeRoute
