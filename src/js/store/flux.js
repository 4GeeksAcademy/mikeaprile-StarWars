const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[],
			characters: [],
		    planets: [],
			startships:[],
			characterDetails: {},
			planetDetails:{},
			startshipsDetails: {}

		},
		actions: {
			// fetch().then().then(data => setStore({ "foo": data.bar }))

			addFav: (item) => {
				const store = setStore({favorites: [...getStore().favorites, item]})
				localStorage.setItem ('favorite', JSON.stringify(store))
			},

			deleteFav: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter( (iteam, id) => { return iteam != name} )})
			},

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

			getStarships: async () => {
				const url = 'https://www.swapi.tech/api/' + "/startships/";
				const options = { method: "GET"};
				const response = await fetch(url, options);
				

				if (response.ok) {
					const data = await response.json();
					setStore({ startships: data.result.properties });
					console.log(data);
					
				} else {
					console.log('Error', response.status, response.statusText);
				}
			},

			getStarshipsDetails: async (id) => {
				const url = 'https://www.swapi.tech/api/' + "/startships/" + id;
				const options = { method: "GET"};
				const response = await fetch(url, options);
				

				if (response.ok) {
					const data = await response.json();
					setStore({ startshipsDetails: data.result.properties });
					console.log(data);
					
				} else {
					console.log('Error', response.status, response.statusText);
				}
			},
			
			getPlanets: async () => {
				const url = 'https://www.swapi.tech/api/' + "/planets/";
				const options = { method: "GET"};
				const response = await fetch(url, options);
				

				if (response.ok) {
					const data = await response.json();
					setStore({ planets: data.result.properties });
					console.log(data);
					
				} else {
					console.log('Error', response.status, response.statusText);
				}
			},

			getPlanetsDetails: async (id) => {
				const url = 'https://www.swapi.tech/api/' + "/planets/" + id;
				const options = { method: "GET"};
				const response = await fetch(url, options);
				

				if (response.ok) {
					const data = await response.json();
					setStore({ planetDetails: data.result.properties });
					console.log(data);
					
				} else {
					console.log('Error', response.status, response.statusText);
				}
			}

		},
				
	}
	
};
	


export default getState;
