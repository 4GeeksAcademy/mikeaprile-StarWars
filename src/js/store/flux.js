const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		//Donde se almacenan los datos que traigo de la API.
			favorites:[],
			characters: [],
		    planets: [],
			starships:[],
			characterDetails: {},
			planetDetails:{},
			starshipDetails: {}

		},
		actions: {
			//Funciones para el boton de Favoritos.
			addFav: (item) => {
				const store = setStore({favorites: [...getStore().favorites, item]})
				localStorage.setItem ('favorite', JSON.stringify(store))
			},
			deleteFav: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter( (iteam, id) => { return iteam != name} )})
			},
//-----------------------------------------------------------------------------------------------------------------------------------------

			//Funciones para traer los datos de los personajes y sus detalles.
			getCharacter: async () => {
				const url = 'https://www.swapi.tech/api/' + 'people';
				const opcions = {method: 'GET'};
				const response = await fetch ( url, opcions)
			
				if (response.ok) {
					const data = await response.json ();
					setStore ({characters : data.results})
					localStorage.setItem ('people', JSON.stringify(data.results))
                         
				} else {
					console.log('Error', response.status, response.statusText);
				}
			},
			getCharacterDetails: async (id) => {
				const url = 'https://www.swapi.tech/api/' + "/people/" + id;
				const options = { method: "GET"};
				const response = await fetch(url, options);

				if (response.ok) {
					const data = await response.json();
						console.log(data);
						setStore({ characterDetails: data.result.properties });
				
				} else {
					console.log('Error', response.status, response.statusText);
				}
			},
//-----------------------------------------------------------------------------------------------------------------------------------------

			//Funciones para traer los datos de las naves y sus detalles.
			getStarships: async () => {
				const url = 'https://www.swapi.tech/api/' + "/starships";
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setStore({ starships: data.results });
				} else {
					console.log("Error: ", response.status, response.statusText);
				}
			},
			getStarshipDetails: async (id) => {
				const url = 'https://www.swapi.tech/api/' + "/starships/" + id;
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setStore({ starshipDetails: data.result.properties });
				} else {
					console.log("Error: ", response.status, response.statusText);
				}
			},
//-----------------------------------------------------------------------------------------------------------------------------------------	

			//Funciones para traer los datos de los planetas y sus detalles.
			getPlanets: async () => {
				const url = 'https://www.swapi.tech/api/' + "/planets/";
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setStore({ planets: data.results });
				} else {
					console.log("Error: ", response.status, response.statusText);
				}
			},
			getPlanetDetails: async (id) => {
				const url = 'https://www.swapi.tech/api/' + "/planets/" + id;
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setStore({ planetDetails: data.result.properties });
				} else {
					console.log("Error: ", response.status, response.statusText);
				}
			},

		},
				
	}
	
};
	


export default getState;
