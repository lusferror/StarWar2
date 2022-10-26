import { func } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/listas";

const Voler = () => {
    const {setInicio}= useContext(DataContext)
        function cambio (){
            setInicio(false)
        }
    return (
        <Link to="/">
            <button className="btn btn-primary btn-lg" onClick={cambio}>Volver</button>
        </Link>
    )
}

export default Voler;