//Importaciones de React.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";

//Componentes.
import { Navbar } from "./component/Navbar.jsx";
import { NotFound404 } from "./component/NotFound404.jsx";
import { BtnFavorite } from "./component/BtnFavorite.jsx";
import injectContext from "./store/appContext";

//Vistas.
import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { CharacterDetails } from "./views/CharacterDetails.jsx";



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
						<Route path="/character-details/:characterId" element={<CharacterDetails />} />
						<Route path="*" element={<NotFound404/>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
