import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <div>
        <nav className="nav d-flex justify-content-center align-items-center">
        <ul className="nav">
        <li className="nav-item">
        <Link className="nav-link text-dark " to="/"><h1>WebWeather</h1></Link>
        </li>
        </ul>
        </nav>
        <nav className="nav d-flex justify-content-center align-items-center">
        <ul className="nav">
        <li className="nav-item">
        <Link className="nav-link text-dark " to="/"><h6>Home</h6></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-dark " to="/About"><h6>About Us</h6></Link>
        </li>
        </ul>
        </nav>
    </div>
    )
}

export default Navbar
