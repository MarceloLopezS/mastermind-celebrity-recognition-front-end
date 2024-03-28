import { useEffect } from "react"
import "particles.js-strict/particles"
import particlesConfig from "./config/particlesjs-config.json"
import "./ui/styles.css"

const ParticlesBg = () => {
	useEffect(() => {
		window.particlesJS("particles-js", particlesConfig)
	}, [])

	return <div id="particles-js"></div>
}

export default ParticlesBg
