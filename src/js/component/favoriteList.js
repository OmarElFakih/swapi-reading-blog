import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function FavList() {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="dropown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((current, index) => {
						return (
							<div className="dropdown-item" key={index}>
								<Link to={current.stringToPush}>{current.stringToDisplay}</Link>
								<button
									type="button"
									className="btn btn-outline-secondary"
									onClick={e => {
										actions.RemoveFromFavorites(current.stringToDisplay);
									}}>
									X
								</button>
							</div>

							// {/* // <a
							// // 	className="dropdown-item"
							// // 	key={index}
							// // 	onClick={e => {
							// // 		history.push(current.stringToPush);
							// // 	}}>
							// // 	{current.stringToDisplay}
							// // </a> */}
						);
					})}
				</div>
			</div>
		</>
	);
}
