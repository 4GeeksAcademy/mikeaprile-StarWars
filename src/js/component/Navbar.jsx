//Importaciones de React.
import React from "react";
import { Link } from "react-router-dom";
import { BtnFavorite } from "./BtnFavorite.jsx";

export const Navbar = () => {
	return (
	
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	<div className="container-fluid">
	  <Link to="/"><span className="navbar-brand" href="#">Star War</span></Link>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		  <li className="nav-item">
		  <Link to="/"> <span className="nav-link active" aria-current="page" href="#"></span></Link>
		  </li>
		  <li className="nav-item">
		  <Link to="/characters">
					<button className="btn btn-primary me-3">Characters</button>
				</Link>
		  </li>
		  <li className="nav-item">
		  <button className="btn btn-primary me-3">Cualquiercosa</button>
		  </li>
		  <li className="nav-item dropdown">
			<BtnFavorite/>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>
	);
};
