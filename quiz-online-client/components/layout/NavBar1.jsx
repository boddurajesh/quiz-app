import React from "react"
import { NavLink } from "react-router-dom"
import Home from "../Home"

const Navbar1 = () => {
	return (
        <>
		
		<nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to={"/"}>
					Online Quiz App
				</NavLink>
				
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/login"}>
								Login
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to={"/register"}>
								Register
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<Home />

		</>
	)
}

export default Navbar1