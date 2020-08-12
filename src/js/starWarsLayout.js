import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
//import { Context } from "./store/appContext";

import { SWHome } from "./views/swHome";
import { SWPerson } from "./views/swPerson";
import { SWPlanet } from "./views/swPlanet";
//import { useEffect } from "react";

const SWLayout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/">
					{/* Home */}
					<SWHome />
				</Route>
				<Route exact path="/person/:name">
					{/* Person View */}
					<SWPerson />
				</Route>
				<Route exact path="/planet/:name">
					{/* Planet view */}
					<SWPlanet />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(SWLayout);
