import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Planeta from "./views/planeta";
import Personaje from "./views/personaje";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { DataProvider } from "./context/listas";
import Nave from "./views/nave";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<DataProvider>
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planeta/:id">
							<Planeta />
						</Route>
						<Route exact path="/personaje/:id">
							<Personaje/>
						</Route>
						<Route exact path="/nave/:id">
							<Nave/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
		</DataProvider>
	);
};

export default injectContext(Layout);
