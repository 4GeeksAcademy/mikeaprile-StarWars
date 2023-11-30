import React,  { useContext }  from "react"; 
import { Context } from "../store/appContext.js" 
import { Link } from "react-router-dom"; 
import Planeta from '../../img/Planeta.jpeg'
import "../../styles/character.css";

export const Planets = () =>{
    const  { store, actions } = useContext (Context); 

    const urlImg = "https://starwars-visualguide.com/assets/img/planets/";
    const handleError = (event) =>{
         event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
        
            return(
                 <div className="mt-5 pt-5">
                     <img className= "imagen" src= {Planeta} alt="personajes"/>
                         <div className= "container">
                         <h1 className="text-warning ">Planets</h1>
                          <div className="row">
                              {store.planets.map((planet, index) => {
                  
            return (
                    
             <div key={planet.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 m-5">
                  <div className="card m-3 bg-dark text-white" style={{ width: '18rem' }}>
                    <img src= {`${urlImg}${planet.uid}.jpg`} onError={handleError} className="card-img-top" alt="planet image" />
                     <div className="card-body">
                        <h5 className="card-title mt-2 mb-4">{planet.name}</h5>
                          <div className="d-flex justify-content-between">
                          <Link to={`/planets/${planet.uid}`} className="btn btn-outline-secondary me-4">Learn more! </Link>
                          <span onClick={() => {actions.addFav({type: "planet", name: planet.name})}} className="btn btn-outline-warning" >
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
        );
        };