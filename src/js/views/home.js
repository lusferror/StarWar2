import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Spinner } from "reactstrap";

//importaciones de app
import { DataContext } from "../context/listas";
import Planetas from "../component/planetas";
import Personajes from "../component/personajes";
import Naves from "../component/naves";
import Autosuggest from "react-autosuggest";
import { Busqueda } from "../component/busqueda";

export const Home = () => {

	const { listaPlanetas } = useContext(DataContext)
	const {listaPlanetasPropiedades} = useContext(DataContext)
	const {listaPersonajes} = useContext(DataContext)
	const {listaPersonajesPropiedades} = useContext(DataContext)
	const {listaNaves} = useContext(DataContext)
	const {listaNavesPropiedades} = useContext(DataContext)
	const {contador} = useContext(DataContext)
	const {setContador} = useContext(DataContext)
	

	const {setListaFavoritosBoton} = useContext(DataContext)
	const {listaFavoritosBoton} = useContext(DataContext)

	function agregarFavoritos(nombre){
		setListaFavoritosBoton(listaFavoritosBoton=> listaFavoritosBoton.concat(nombre))
		setContador(contador=>contador+1)
	}


	if((listaPlanetasPropiedades.length!= listaPlanetas.length)|| listaPlanetas.length==0 || listaPersonajes.length==0 ||
	(listaPersonajesPropiedades.length!=listaPersonajes.length)|| listaNavesPropiedades.length==0 ){
		return (
		<div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
			<Spinner color="primary" style={{height:"50px",width:"50px"}}/>
		</div>
		)
	}
	else{
	return (
		<div className="text-center mt-5">
			<h1>Planetas</h1>
			
			<div className="row w-100 m-3 contenedor" style={{display:"grid",gridAutoFlow:"column",gridAutoColumns:"20%", overflowX:"auto", height:"500px"}} >
				{listaPlanetasPropiedades.map((element,index)=>
				<Planetas nombre={element.name} clima={element.climate} diametro={element.diameter} key={index} id={element.uid} agregar={agregarFavoritos}/>)}
			</div>
			<h1>Personajes</h1>
			<div className="row w-100 m-3 contenedor" style={{display:"grid",gridAutoFlow:"column",gridAutoColumns:"20%", overflowX:"auto", height:"500px"}} >
				{listaPersonajesPropiedades.map((element,index)=>
				<Personajes nombre={element.name} genero={element.gender} nacimiento={element.birth_year} key={index} id={element.uid} agregar={agregarFavoritos}/>)}
			</div>
			<h1>Naves</h1>
			<div className="row w-100 m-3 contenedor" style={{display:"grid",gridAutoFlow:"column",gridAutoColumns:"20%", overflowX:"auto", height:"500px"}} >
				{listaNavesPropiedades.map((element,index)=>
				<Naves nombre={element.name} clase={element.starship_class} fabrica={element.manufacturer} key={index} id={element.uid} agregar={agregarFavoritos}/>)}
			</div>

		</div>
	);
				}
}