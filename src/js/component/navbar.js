import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/listas";
import BotonFavoritos from "./botonFavoritos";
import { Busqueda } from "./busqueda";
import Voler from "./volver";

export const Navbar = () => {

	const {inicio}=useContext(DataContext)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-3">Star War</span>
			</Link>
			<div>
			{inicio?<></>:<Busqueda/>}
			</div>
			<div className="float-end me-5">
				{inicio?<Voler/>:<BotonFavoritos/>}
				</div>
		</nav>
	);
};
