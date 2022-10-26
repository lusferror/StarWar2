import { func } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { DataContext } from "../context/listas";
const Planetas = (props) => {
    const {incio}= useContext(DataContext)
    const {setInicio}= useContext(DataContext)
    
    function agregarFavoritos(){
        let favoritos ={name: props.nombre,
                        uid: props.id,
                        url: `/planeta/${props.id}`    }
        props.agregar(favoritos)
    }
    function cambiar(){
        setInicio(true)
    }

    return (

        <div className="card fs-6 p-0 h-100" style={{ width: "90%", }}>
            <img src={rigoImage} className="card-img-top m-0 " alt="..." />
            <div className="card-body h-25">
                <h5 className="card-title">{props.nombre}</h5>

                <p className="text-start">
                    Clima: <b>{props.clima}</b><br/>
                    Diametro: <b>{props.diametro}</b>
                </p>
            </div>
            <div className="h-25 mt-4">
                <Link to={`/planeta/${props.id}`}>
                    <button className="btn btn-primary" onClick={cambiar}>Leer Mas</button>
                </Link>
                <button className="btn btn-success" onClick={agregarFavoritos}><i className="bi bi-heart"></i></button>
            </div>
        </div>
    )
}

export default Planetas;