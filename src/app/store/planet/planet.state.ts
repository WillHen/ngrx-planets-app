import { Planet } from "../../models/planet.model";

export interface PlanetState extends Planet {
}

export interface PlanetLoadState {
	coreState: {
		planets: Planet[]
	}
}

export const initializePlanetState = function() {
	return {
		climate: "",
		diameter: "",
		gravity: "",
		name: "",
		orbital_period: "",
		population: "",
		residents: null,
		rotation_period: "",
		surface_water: "",
		terrain: "",
		url: ""
	}
};

export interface PlanetListState {
	planets: Planet[];
	loading: boolean;
}


export const intializePlanetListState = function() {
	return {
		loading: false
	};
};
