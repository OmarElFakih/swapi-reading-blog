import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function SWPeopleCard({ character }) {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<>
			{character.name}
			<div className="d-flex">
				<button
					type="button"
					className="btn btn-primary"
					onClick={e => {
						history.push(`/person/${character.name}`);
					}}>
					learn more
				</button>
				<button
					type="button"
					className="btn btn-outline-warning"
					onClick={e => {
						console.log(`${character.name} added to favorites`);
						actions.AddToFavorites(character, "person");
						console.log(store.favorites);
					}}>
					heart
				</button>
			</div>
		</>
	);
}

SWPeopleCard.propTypes = {
	character: PropTypes.object
};
