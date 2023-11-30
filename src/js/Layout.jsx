//Importaciones de React.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";

//Componentes.
import { Navbar } from "./component/Navbar.jsx";
import injectContext from "./store/appContext";

//Vistas.
import { File404 } from "./views/File404.jsx";
import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { CharacterDetails } from "./views/CharacterDetails.jsx";
import { Planets } from "./views/Planets.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { Starships } from "./views/Starships.jsx";
import { StarshipDetails } from "./views/StarshipDetails.jsx";




//Toda la composicion.
const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:characterId" element={<CharacterDetails />} />
						<Route path="/planets" element={<Planets/>}/>
						<Route path="/planets/:planetId" element={<PlanetDetails/>}/>
						<Route path="/starships" element={<Starships/>}/>
						<Route path="/starships/:starshipId" element={<StarshipDetails/>}/>
						<Route path="*" element={<File404 />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
