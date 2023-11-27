//Importaciones de React.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";

//Componentes.
import { Navbar } from "./component/Navbar.jsx";
import { NotFound404 } from "./component/NotFound404.jsx";
import injectContext from "./store/appContext";

//Vistas.
import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { Single } from "./views/single";


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
						<Route path="/character" element={<Characters />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<NotFound404/>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
