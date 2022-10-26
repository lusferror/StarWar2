import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/listas";

export const ListaFavoritos = (props)=>{
    const {inicio} =useContext(DataContext)
    const {setInicio} =useContext(DataContext)
    function apunta(){
        setInicio(true)
    }

    function borrar(){
        props.funcion(props.id)
        
    }
    return(
        <li className="d-flex"><Link to={props.url} className="dropdown-item" href="#" onClick={apunta}>{props.item}</Link><i className="bi bi-trash3-fill mt-1 me-2 dropdown-item float-end" onClick={borrar}></i> </li>
    )
}

