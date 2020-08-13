import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { SWPeopleCard } from "../component/starWarsPeopleCard";
import { SWPlanetCard } from "../component/starWarsPlanetCard";
import { FavList } from "../component/favoriteList";

export function SWHome() {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		async function getData() {
			let people = await actions.GetSWData("people/");
			let planets = await actions.GetSWData("planets/");
			actions.SetSWPeople(people);
			actions.SetSWPlanets(planets);
			console.log(store.swPeople);
			console.log(store.swPlanets);
		}

		getData();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between">
				<h1>Home</h1>
				<FavList />
			</div>
			<h3>People</h3>
			<div style={{ overflowX: "auto", whiteSpace: "nowrap", display: "flex" }}>
				{store.swPeople.map(current => {
					return <SWPeopleCard character={current} key={current.name} />;
				})}
			</div>
			<h3>Planets</h3>
			<div style={{ overflowX: "auto", whiteSpace: "nowrap", display: "flex" }}>
				{store.swPlanets.map(current => {
					return <SWPlanetCard planet={current} key={current.name} />;
				})}
			</div>
		</>
	);
}
