//Importaciones de React.
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwarsYellow from '../../img/starwars_yellow.png';
import { BtnFavorite } from "./BtnFavorite.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const  { store, actions } = useContext (Context)

	return (
	
		<nav className="navbar fixed-top bg-black m-0 ps-3 pe-3">
		<Link to= "/" className="navbar-brand">
			<span><img src={ starwarsYellow } alt="starwars logo" width="110" height="60"/></span>
		</Link>
		<Link to= "/characters" className="nav-link text-decoration-none text-white fs-4">Characters</Link>
		<Link to= "/planets" className="nav-link text-decoration-none text-white fs-4">Planets</Link>
		<Link to= "/starships" className="nav-link text-decoration-none text-white fs-4">Starships</Link>
		<div className="ml-auto">
		<BtnFavorite />
			
		</div>
	</nav>
);
};
