import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Planet } from "../../models/planet.model";

// True while fetching data from API
export const LOADING = "Planet Load";

// Fetching Food Details via Food Report API
export const FETCH_PLANETS = "Fetch PLANETS";
export const FETCH_PLANETS_DONE = "Fetch Planets Done";

export class FetchPlanets implements Action {
	readonly type = FETCH_PLANETS;
	constructor() {}
}

export class FetchPlanetsDone implements Action {
	readonly type = FETCH_PLANETS_DONE;
	constructor(public payload: Planet[]) {}
}

export type Actions = FetchPlanets | FetchPlanetsDone;
