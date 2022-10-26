import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/listas";
import MostrarPropiedades from "../component/propiedades";
import rigoImage from "../../img/rigo-baby.jpg";


const Nave = () => {
    const {listaNavesPropiedades}=useContext(DataContext)
    const [elemento, setElemento] = useState({})
    const [propiedades, setPropiedades] = useState([])
    const [valores, setValores] = useState([])

    const {id} = useParams();

    useEffect(()=>{

        listaNavesPropiedades.map((element,index)=>{
            if(element.uid==id){
                setElemento({...listaNavesPropiedades[index]})
                setPropiedades(Object.keys(listaNavesPropiedades[index]))
                setValores(Object.values(listaNavesPropiedades[index]))
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

export default Nave;