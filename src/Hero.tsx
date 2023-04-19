import './component_styles/hero.scss'
import { Link } from "react-router-dom"


export default function Testimonials() {
	return (
		<header>
		  <div className="hero__content">
		    <h1>Luthier Services</h1>
		    <p>Do you need to fix your instrument? I'm the right guy!</p>
		    <Link to="/contact"><button className="button">I do!</button></Link>
		  </div>
		  <img src="image1.jpg"/>
		</header>
	)
}