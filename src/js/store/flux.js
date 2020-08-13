const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			baseURL: "https://swapi.dev/api/",

			swPeople: [],

			swPlanets: [],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			GetSWData: async URLAddition => {
				const store = getStore();
				const peopleList = await fetch(`${store.baseURL}${URLAddition}`);
				const list = await peopleList.json();
				return list.results;
			},
			SetSWPeople: list => {
				setStore({ swPeople: list });
			},

			SetSWPlanets: list => {
				setStore({ swPlanets: list });
			},

			AddToFavorites: (swObject, objType) => {
				const store = getStore();
				let listEntry = {
					stringToPush: `/${objType}/${swObject.name}`,
					stringToDisplay: swObject.name
				};
				setStore({ favorites: [...store.favorites, listEntry] });
			},

			RemoveFromFavorites: name => {
				const store = getStore();
				let filteredList = store.favorites.filter(current => name != current.stringToDisplay);

				setStore({ favorites: filteredList });
				console.log(`Remove From favorites has been called with ${name}`);
			}
		}
	};
};

export default getState;
