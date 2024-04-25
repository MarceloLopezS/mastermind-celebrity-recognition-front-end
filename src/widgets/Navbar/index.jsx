import { Link } from "react-router-dom"
import logo from "../../shared/assets/images/mastermind-logo.webp"
import styles from "./ui/styles.module.css"
import LogoutButton from "./ui/LogoutButton"

const Navbar = ({ isLoggedIn }) => {
	return (
		<div className={styles["navbar"]}>
			<div className={styles["navbar__brand"]}>
				<img src={logo} alt="Mastermind logo"></img>
				<h1>Mastermind</h1>
			</div>
			<nav className={styles["navbar__nav"]}>
				{isLoggedIn ? (
					<LogoutButton />
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
