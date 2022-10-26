import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [listaPlanetas, setListaPlanetas] = useState([]);
    const [listaPlanetasPropiedades, setListaPlanetasPropiedades] = useState([])
    const [listaPersonajes, setListaPersonajes] = useState([])
    const [listaPersonajesPropiedades, setListaPropiedadesPersonajes] = useState([])
    const [listaNaves, setListaNaves] = useState([])
    const [listaNavesPropiedades, setListaNavesPropiedades] = useState([])
    const [listaFavoritosBoton, setListaFavoritosBoton]= useState([])
    const [inicio, setInicio] = useState(false)
    const [listadoSugerencia , setListadoSugerencia] = useState([])
    const [contador,setContador] = useState(0)

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                setListaPlanetas(listaPlanetas.concat(data.results));
            })
            .catch(error => {
                console.error(error)
            })
      
            fetch(`https://www.swapi.tech/api/people`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    setListaPersonajes(listaPersonajes.concat(data.results));
                })
                .catch(error => {
                    console.error(error)
                })

                fetch(`https://www.swapi.tech/api/starships`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        setListaNaves(listaNaves.concat(data.results));
                    })
                    .catch(error => {
                        console.error(error)
                    })

                
    }, [])


    useEffect(() => {
        listaPlanetas.map((element, index) => {
            fetch(`https://www.swapi.tech/api/planets/${element.uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    data.result.properties.url = `/personaje/${element.uid}`
                    data.result.properties.uid = element.uid;
                    setListaPlanetasPropiedades(listaPlanetasPropiedades => listaPlanetasPropiedades.concat(data.result.properties));
                })
                .catch(error => {
                    console.error(error)
                })
        })
    }, [listaPlanetas])

    useEffect(() => {
        listaPersonajes.map((element, index) => {
            fetch(`https://www.swapi.tech/api/people/${element.uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    data.result.properties.uid = element.uid;
                    data.result.properties.url = `/personaje/${element.uid}`
                    setListaPropiedadesPersonajes(listaPersonajesPropiedades => listaPersonajesPropiedades.concat(data.result.properties));
                })
                .catch(error => {
                    console.error(error)
                })
        })
    }, [listaPersonajes])

    useEffect(() => {
        listaNaves.map((element, index) => {
            fetch(`https://www.swapi.tech/api/starships/${element.uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    data.result.properties.uid = element.uid;
                    setListaNavesPropiedades(listaNavesPropiedades => listaNavesPropiedades.concat(data.result.properties));
                })
                .catch(error => {
                    console.error(error)
                })
        })
    }, [listaNaves])

    useEffect(()=>{
        setListadoSugerencia(listaPersonajesPropiedades.concat(listaPlanetasPropiedades))

    },[listaPersonajesPropiedades])

    return (
        <DataContext.Provider value={{ listaPlanetas, setListaPlanetas, listaPlanetasPropiedades, setListaPlanetasPropiedades , listaPersonajes, listaPersonajesPropiedades,
        listaNaves, listaNavesPropiedades, listaFavoritosBoton, setListaFavoritosBoton, inicio, setInicio, listadoSugerencia, contador, setContador}}>
            {children}
        </DataContext.Provider>
    )
}