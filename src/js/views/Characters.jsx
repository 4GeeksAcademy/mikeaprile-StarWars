//Importaciones de React.
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//Componentes.
import { Footer } from "../component/Footer.jsx"

//Estilos CSS.
import "../../styles/character.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		   
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<Footer/>
		</div>
	);
};
