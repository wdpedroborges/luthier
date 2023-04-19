import './component_styles/footer.scss'
import { Link } from "react-router-dom"

export default function Footer() {

	const getCurrentYear = () => {
		const date = new Date()
		return date.getFullYear()
	}

	return (
		<div className="footer-container">
			<footer className="footer">
				<div className="socials">
					<a href="#" target="_blank"><img src="facebook.png"/></a>
					<a href="#" target="_blank"><img src="instagram.png"/></a>
					<a href="https://www.linkedin.com/in/pedroborges11/" target="_blank"><img src="linkedin.png"/></a>
					<a href="https://github.com/wdpedroborges" target="_blank"><img src="github.png"/></a>
				</div>
				<div className="divs">
					<div>
						<h3>Luthier</h3>
						<p>We offers a big range of services for all your luthier needs. We have the perfect car to meet your needs.</p>
						<ul>
							<li><img src="telephone-call.png"/> (123)-456-789</li>
							<li><img src="mail.png"/> luthier@gmail.com</li>
						</ul>
					</div>
					<div>
						<h3>COMPANY</h3>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
					<div>
						<h3>WORKING HOURS</h3>
						<ul>
							<li><span className="strong">Mon - Fri:</span> 9:00AM - 9:00PM</li>
							<li><span className="strong">Sat:</span> 9:00AM - 19:00PM</li>
							<li><span className="strong">Sun:</span> Closed</li>
						</ul>
					</div>
					<div>
						<h3>SUBSCRIPTION</h3>
						<p>Subscribe your Email address for latest news & updates.</p>
						<form>
							<input type="email"/>
							<button>Submit</button>
						</form>
					</div>
				</div>
				<div className="copyright">
					<small>&copy; Copyright {getCurrentYear()} - Luthier</small>
				</div>
			</footer>
		</div>
	)
}