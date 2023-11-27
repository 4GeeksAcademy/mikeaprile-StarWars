//Importaciones de React.
import React from "react";

//Componentes.
import { Footer } from "../component/Footer.jsx";

//Estilos de CSS.
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5">
	
		<button className="btn btn-success">
			If you see this green button, bootstrap is working
		</button>
		<Footer/>
	</div>
);