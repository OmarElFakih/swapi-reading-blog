import React from "react";
import { useHistory, useParams } from "react-router-dom";

export function SWPerson() {
	const history = useHistory();
	const { name } = useParams();
	return (
		<>
			<h1>Im am {name}</h1>
			<button
				type="button"
				className="btn btn-primary"
				onClick={e => {
					history.push("/");
				}}>
				Home
			</button>
		</>
	);
}
