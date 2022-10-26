import { element } from "prop-types";
import React, { useContext, useState } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import { DataContext } from "../context/listas";

export const Busqueda = (props) => {

    const {listadoSugerencia} = useContext (DataContext)
    const {inicio} = useContext(DataContext)
    const {setInicio} = useContext(DataContext)
    const [sugerenciaPlaneta, setSugerenciaPlaneta] = useState([])
    const [value, setValue] = useState("")
    const [planetaSelecionado, setPlanetaSelecionado] = useState({})
    
    const onSuggestionsFetchRequested = ({ value }) => {
        setSugerenciaPlaneta(filtrarPlanetas(value))
    }

    const filtrarPlanetas = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        var filtrado = listadoSugerencia.filter((planeta) => {
            var textoCompleto = planeta.name + "-" + planeta.uid;

            if (textoCompleto.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputValue)) {
                return planeta;
            }
        });
        return inputLength === 0 ? [] : filtrado;
    }

    const onSuggestionsClearRequested = () => {
        setSugerenciaPlaneta([]);
    }

    const getSuggestionValue = (suggestion) => {
        return `${suggestion.name} - ${suggestion.uid}`;
    }

    const renderSuggestion = (suggestion) => (
        
        <Link to={suggestion.url}>
        <div className="p-1" onClick={()=>seleccionarPlaneta(suggestion)}>
           {`${suggestion.name} - ${suggestion.uid}`}

        </div>
           </Link>
    )

    const seleccionarPlaneta = (planeta) => {
        setPlanetaSelecionado(planeta);
        setInicio(true)
    }

    const onChange = (e, { newValue }) => {
        setValue(newValue);
    }

    const inputProps = {
        placeholder: "Ingresa el nombre del Planeta o Personaje",
        value,
        onChange
    };



    const eventEnter = (e) => {
        if (e.key == "Enter") {
            console.log("ENTRO")
            var split = e.target.value.split("-");
            
            var planeta = {
                planeta: split[0].trim(),
                uid:split[1].trim()
            }
            seleccionarPlaneta(planeta)
            setInicio(false)

        }
    }

    return (
        <div>
            <Autosuggest suggestions={sugerenciaPlaneta} onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested} getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion} inputProps={inputProps} onSuggestionSelected={eventEnter} className="mt-3"/>
           
        </div>
    )
}