import { Link } from "react-router-dom"
import logo from "@/shared/assets/images/mastermind-logo.webp"
import DoubleSquareLoader from "@/shared/ui/DoubleSquareLoader"
import LogoutButton from "./ui/LogoutButton"
import styles from "./ui/styles.module.css"

const LOGO_BASE_WIDTH = "64px"

const Navbar = ({ isAuthLoading = false, isLoggedIn = false }) => {
	return (
		<div className={styles["navbar"]}>
			<Link className={styles["navbar__brand"]} to="/">
				<img
					src={logo}
					width={LOGO_BASE_WIDTH}
					height={LOGO_BASE_WIDTH}
					alt="Mastermind logo"
					decoding="async"
				></img>
				<h1>Mastermind</h1>
			</Link>
			<nav className={styles["navbar__nav"]}>
				{isAuthLoading ? (
					<DoubleSquareLoader isShown={true} style={{ marginLeft: "2rem" }} />
				) : isLoggedIn ? (
					<LogoutButton />
				) : (
					<>
						<Link to="/login">Log In</Link>
						<Link to="/register">Sign Up</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar
