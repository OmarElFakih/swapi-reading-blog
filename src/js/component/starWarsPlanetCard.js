import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function SWPlanetCard({ planet }) {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<>
			{planet.name}
			<div className="d-flex">
				<button
					type="button"
					className="btn btn-primary"
					onClick={e => {
						history.push(`/planet/${planet.name}`);
					}}>
					learn more
				</button>
				<button
					type="button"
					className="btn btn-outline-warning"
					onClick={e => {
						console.log(`${planet.name} added to favorites`);
						actions.AddToFavorites(planet, "planet");
						console.log(store.favorites);
					}}>
					heart
				</button>
			</div>
		</>
	);
}

SWPlanetCard.propTypes = {
	planet: PropTypes.object
};
