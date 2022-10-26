import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/listas";
import MostrarPropiedades from "../component/propiedades";
import rigoImage from "../../img/rigo-baby.jpg";


const Personaje = () => {
    const {listaPersonajesPropiedades}=useContext(DataContext)
    const [elemento, setElemento] = useState({})
    const [propiedades, setPropiedades] = useState([])
    const [valores, setValores] = useState([])

    const {id} = useParams();

    useEffect(()=>{

        listaPersonajesPropiedades.map((element,index)=>{
            if(element.uid==id){
                setElemento({...listaPersonajesPropiedades[index]})
                setPropiedades(Object.keys(listaPersonajesPropiedades[index]))
                setValores(Object.values(listaPersonajesPropiedades[index]))
        }});
    },[])

    return (
        <div>
            <div className="card mx-auto border-2 shadow-lg" style={{width: "30rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                       <h2>{elemento.name}</h2>

                    </div>
                    <div>
                        <ul style={{listStyle:"none"}}>
                    {propiedades.map((e,index)=>
                       <MostrarPropiedades propiedad={e} valores={valores[index]} key={index}/>
                    )}
                    </ul>
                    </div>
            </div>


        </div>

    )
}

export default Personaje;