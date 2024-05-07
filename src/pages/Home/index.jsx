import { Link } from "react-router-dom"
import ArrowBadgeFilledSVG from "../../shared/ui/SVGs/ArrowBadgeFilled"
import styles from "./ui/styles.module.css"

const Home = () => {
	return (
		<section className={styles["hero"]}>
			<section className={styles["hero__description"]}>
				<p>Welcome to</p>
				<h1 className={styles["hero__main-title"]}>Mastermind</h1>
				<p className={styles["hero__subtitle"]}>Celebrity recognition app</p>
				<p className="fw-bold margin-block-start-50">
					For detection on your images
				</p>
				<div className={styles["hero__cta"]}>
					<Link className={styles["hero__cta--btn"]} to="/login">
						Login to enjoy all features
					</Link>
					<p>
						or{" "}
						<span
							className={`${styles["hero__cta--secondary"]} | text-highlight`}
						>
							Try our demo
							<ArrowBadgeFilledSVG />
						</span>
					</p>
				</div>
			</section>
			<section></section>
		</section>
	)
}

const HomeRoute = {
	element: <Home />
}

export default HomeRoute
