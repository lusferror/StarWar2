import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { DataContext } from "../context/listas";
const Naves = (props) => {

    const {setListaFavoritosBoton} = useContext(DataContext)
	const {listaFavoritosBoton} = useContext(DataContext)
    const {incio}= useContext(DataContext)
    const {setInicio}= useContext(DataContext)

	function agregarFavoritos(){
        let favoritos ={name: props.nombre,
            uid: props.id,
            url: `/nave/${props.id}`    }
props.agregar(favoritos)
	}
    function cambiar(){
        setInicio(true)
    }
    return (

        <div className="card fs-6 p-0" style={{ width: "90%"}}>
            <img src={rigoImage} className="card-img-top m-0 " alt="..." />
            <div className="card-body ">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="text-start">
                    Clase: <b>{props.clase}</b><br/>
                    Fabrica: <b>{props.fabrica}</b>
                </p>
            </div>
            <div className="mb-1" style={{height:"10%"}}>
                <Link to={`/nave/${props.id}`}>
                    <button className="btn btn-primary" OnClick={cambiar}>Learn More</button>
                </Link>
                <button className="btn btn-success" onClick={agregarFavoritos}><i className="bi bi-heart"></i></button>
            </div>
        </div>
    )
}

export default Naves;