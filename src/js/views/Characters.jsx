//Importaciones de React.
import React,  { useContext, useState }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { Link } from "react-router-dom";
import Personajes from '../../img/Personajes.jpeg'





//Estilos CSS.
import "../../styles/character.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) =>{
        	event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
        };
       
            return (
                
            	<div className="mt-5 pt-5">
                     <img className= "imagen" src= {Personajes} alt="personajes"/>
                        <div className="container">
                        <h1 className="text-warning">Characters</h1>
                       		<div className="row">
                        		{store.characters.map((character, index) =>{
			return (
                <div key={character.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 m-5">
                    <div className="card m-3 bg-dark text-white" style={{ width: '18rem' }}>
                      <img src={`${urlImg}${character.uid}.jpg`} onError={handleError} className="card-img-top" alt="character image" />
                        <div className="card-body">
                        	<h5 className="card-title mt-2 mb-4">{character.name}</h5>   
                            <div className="d-flex justify-content-between">
							    <Link to={`/characters/${character.uid}`} className="btn btn-outline-secondary me-4">Learn more! </Link>
						            <span onClick={() => {actions.addFav({type: "character", name: character.name})}} className="btn btn-outline-warning" >
						              	<i className="fas fa-heart"></i></span>
                                         
						
                            </div>
                        </div>
                	</div>
                </div>
				 
                                  
                )
            })
        }
                    	 	</div>
                   		</div>
				
                </div>
    )
 }