import React, {useContext, useEffect} from "react";  
import { Link, useParams }  from "react-router-dom"; 
import { Context } from "../store/appContext.js"; 
import { Spinner } from "../component/Spinner.jsx";
import Personajes from '../../img/Personajes.jpeg'

export const CharacterDetails = () =>{
    const  {store, actions } = useContext (Context); 

   
    const params = useParams();
    console.log(params);
    
    useEffect(()=>{
        async function fetchData() {
            const response = await actions.getCharacterDetails(params.characterId);
            console.log(store.characterDetails); 
            console.log(store.characterDetails.properties); 
        }
          fetchData();
    }, [])
    
  

    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    return(
        <div className="mt-5 pt-5">
        <h1 className="text-center mt-4">Character Details</h1> 
        <img className= "imagen" src= {Personajes} alt="personajes"/>
            <div className="card m-auto mt-4 d-flex flex-row bg-dark text-white" style={{ width: "60rem" }}>
                <img src={`${urlImg}${params.characterId}.jpg`} onError={handleError} className="card-img" alt="character image" />
                    <div className="card-body d-flex flex-column col-11">
                        <h3 className="card-title text-center mb-4 text-warning">{store.characterDetails.name}</h3> 

                        {!store.characterDetails ? 
                            <Spinner />
                        :
                        <div className="text-center flex-grow-1">
                        <p><strong> Birth Year: </strong> {store.characterDetails.birth_year}</p>
                        <p><strong> Gender: </strong> {store.characterDetails.gender}</p>
                        <p><strong> Eye Color: </strong> {store.characterDetails.eye_color}</p>
                        <p><strong> Hair Color: </strong> {store.characterDetails.hair_color}</p>
                        <p><strong> Height: </strong>{store.characterDetails.height}</p>
                        <p><strong> Mass: </strong> {store.characterDetails.mass}</p>
                        <p><strong> Skin Color: </strong>{store.characterDetails.skin_color}</p>                       
                        </div>
                        }
                        
                            <Link to="/characters" className="btn btn-outline-secondary">
                                Go back
                            </Link> 
                    </div>
             </div>
        </div>
    )
}