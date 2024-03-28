import { useRef } from "react"
import { Link, useFetcher } from "react-router-dom"
import logo from "../../shared/assets/images/mastermind-logo.png"
import styles from "./ui/styles.module.css"

const Navbar = ({ isLoggedIn }) => {
	const fetcher = useFetcher()
	const loaderRef = useRef(null)

	return (
		<div className={styles["navbar"]}>
			<div className={styles["navbar__brand"]}>
				<img src={logo} alt="Mastermind logo"></img>
				<h1>Mastermind</h1>
			</div>
			<nav className={styles["navbar__nav"]}>
				{isLoggedIn ? (
					<>
						<span ref={loaderRef} className={styles["loader"]}></span>
						<button
							className={styles["navbar__button"]}
							onClick={e => {
								const loader = loaderRef.current
								loader.setAttribute("data-show", "")
								const data = {
									requestAction: "logout"
								}
								const options = {
									method: "post",
									action: "/"
								}
								fetcher.submit(data, options)
							}}
						>
							Log Out
						</button>
					</>
				) : (
					<>
						<Link to="/">Log In</Link>
						<Link to="/register">Sign Up</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar
