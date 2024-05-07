import styles from "./ui/styles.module.css"

const Home = () => {
	return (
		<section className={styles["hero"]}>
			<section>
				<p>Welcome to</p>
				<h1>Mastermind</h1>
				<p>Celebrity recognition app</p>
				<p>For detection on your images</p>
				<button>Login to enjoy all features</button>
				<p>
					or <span>Try our demo</span>
				</p>
			</section>
			<section></section>
		</section>
	)
}

const HomeRoute = {
	element: <Home />
}

export default HomeRoute
