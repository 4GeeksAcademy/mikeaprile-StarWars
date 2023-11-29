//Importaciones de React.
import React,  { useContext, useState }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context


//Componentes.
import { Footer } from "../component/Footer.jsx"
import { BtnDetails } from "../component/BtnDetails.jsx";

//Estilos CSS.
import "../../styles/character.css";

export const Characters = () => {


	const { store, actions } = useContext(Context);
    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
	
        

	return (
		<div>
			<h1 className="text-warning m-3 text-center">Characters</h1>
			<div className= "container d-flex flex-wrap align-items-row"> {store.characters.map((character, index) => {
			  const handleAdd = () => {actions.addFav({type: "character", name: character.name})}
			  const handleDelete = () => {actions.deleteFav({type: "character", name: character.name})}
				

			  return (
			<div key={character.uid} className="card m-3 bg-dark text-white rounded" style={{ width: "25rem"}}>
					<img src= {`${urlImg}${character.uid}.jpg`} onError={handleError} className="card-img" alt="character image" />
				<div className="card-body">
					<h5 className="card-title">{character.name}</h5>
						<p className="card-text">{`Gender: ${character.gender}`}</p>
						<p className="card-text">{`Height: ${character.height}`}</p>
						<p className="card-text">{`Homeworld: ${character.homeworld}`}</p>
					<BtnDetails />
						<span className="btn btn-outline-warning" >
						<i className="fas fa-heart"></i></span>
				</div>
			</div>
				)
			})
		}
			</div> 
			<Footer/>   
		</div>
	);
};
