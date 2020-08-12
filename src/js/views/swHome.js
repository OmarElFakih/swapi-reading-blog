import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

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
			<h1>Home</h1>
			<div style={{ overflowX: "auto" }}>
				{store.swPeople.map(current => {
					return (
						<button
							type="button"
							className="btn btn-primary"
							key={current.name}
							onClick={e => {
								history.push(`/person/${current.name}`);
							}}>
							{current.name}
						</button>
					);
				})}
			</div>
		</>
	);
}
