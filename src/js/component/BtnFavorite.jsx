//Importacion React.
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorite = () => {
    const { store, actions} = useContext(Context)

    const handleAdd = () => {
        actions.addFav ("")
    }
    const handleDelete = () => {
        actions.deleteFav("")
    }

    return (
    <div className= "container">
        <h1>favorite</h1>

        <button className="btn btn-success" onClick={handleAdd}>Agregar</button>
        <button className="btn btn-danger"  onClick={handleDelete}>Quitar</button>
    </div>
    )
};