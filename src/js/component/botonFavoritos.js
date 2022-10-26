import React,{useContext} from "react";
import { DataContext } from "../context/listas";
import { ListaFavoritos } from "./listaFavoritos";

const BotonFavoritos = () => {
    const {listaFavoritosBoton}= useContext(DataContext)
    const {setListaFavoritosBoton}= useContext(DataContext)
    const {contador} = useContext(DataContext)
	const {setContador} = useContext(DataContext)


    const borrar = (id)=>{
        const listafiltrada = listaFavoritosBoton.filter((e,i)=>i!==id);
        setListaFavoritosBoton(listafiltrada);
        setContador(contador=>contador-1)
    }
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Lista de Favoritos<span className="badge text-bg-secondary ms-1" style={{background:"gray"}}>{contador}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {contador==0?
                <li><a className="dropdown-item" href="#">Lista Vacia</a></li>
                :
                listaFavoritosBoton.map((element,index)=>
                   <ListaFavoritos item={element.name} id={index} funcion={borrar} url={element.url}/>)}
            </ul>
        </div>
    )
}

export default BotonFavoritos;