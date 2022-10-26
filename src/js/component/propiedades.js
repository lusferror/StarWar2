import React from "react";

const MostrarPropiedades = (props) =>{
    return(
        <li><b>{props.propiedad}</b>: {props.valores}</li>
    )
}

export default MostrarPropiedades;