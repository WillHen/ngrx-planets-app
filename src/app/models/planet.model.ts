export class Planet {
	climate: string;
	diameter: string;
	gravity: string;
	name: string;
	orbital_period: string;
	population: string;
	residents?: (string)[] | null;
	rotation_period: string;
	surface_water: string;
	terrain: string;
	url: string;

	constructor() {
		this.climate = "";
		this.diameter = "";
		this.gravity = "";
		this.name = "";
		this.orbital_period = "";
		this.population = "";
		this.rotation_period = "";
		this.surface_water = "";
		this.terrain = "";
		this.url = "";
	}
}
