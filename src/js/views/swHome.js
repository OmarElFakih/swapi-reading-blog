import React from "react";
import { useHistory } from "react-router-dom";

export function SWHome() {
	const history = useHistory();

	return (
		<>
			<h1>Home</h1>
			<button
				type="button"
				className="btn btn-primary"
				onClick={e => {
					history.push("/person/luke");
				}}>
				luke
			</button>
			<button
				type="button"
				className="btn btn-primary"
				onClick={e => {
					history.push("/person/your father");
				}}>
				your father
			</button>
			<button
				type="button"
				className="btn btn-primary"
				onClick={e => {
					history.push("/planet/tatooine");
				}}>
				taooine
			</button>
			<button
				type="button"
				className="btn btn-primary"
				onClick={e => {
					history.push("/planet/Mars");
				}}>
				Mars
			</button>
		</>
	);
}
