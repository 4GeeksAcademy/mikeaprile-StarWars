//Importacion React.
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorite = () => {
    const { store, actions} = useContext(Context)
    const myFavorites = store.favorites;
 

    return (
      <div className="dropdown">
        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Favorites  
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-black"> {myFavorites.length} </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end"> 
          {myFavorites.length === 0 ? 
          (<li><span className="dropdown-item">No favorites selected</span></li>) : 
          (myFavorites.map((item, i) => 
          (<li key={item.id} className="d-flex align-items-center">
           <span  className="dropdown-item"> {item.name} - {item.type}</span>
           <button type="button" className="btn btn-outline-danger m-3" 
           onClick={() => actions.deleteFav(item, myFavorites)}><i className="fa fa-trash"></i></button>
            </li>
            ))
          )}
        </ul>
      </div>
    );
  };