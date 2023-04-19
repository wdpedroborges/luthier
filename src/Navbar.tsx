import { useRef } from 'react'
import { Link } from "react-router-dom"
import './component_styles/navbar.scss'

export default function Navbar() {
	const navbarRef = useRef<HTMLUListElement>(null)

	const handleOpenNavbar = () => {
		navbarRef.current!.style.left = '0'
	}

	const handleCloseNavbar = () => {
		navbarRef.current!.style.left = '-100%'
	}

	return (
		<nav className="nav">
			<div className="logo" style={{display: 'flex', alignItems: 'center'}}>
				<img src="guitar.png" style={{width: '45px', height: '45px', margin: '0 0 0 1rem'}}/>
				<h1>Luthier</h1>
			</div>
			<span className="toggleNavbar" onClick={handleOpenNavbar}><img src="open-menu.png"/></span>
			<ul ref={navbarRef}>
				<span className="toggleNavbarList" onClick={handleCloseNavbar}><img src="close-menu.png"/></span>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</nav>
	)
}