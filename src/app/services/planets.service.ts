import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Planet } from "../models/planet.model";

@Injectable({
	providedIn: "root"
})
export class PlanetsService {
	constructor(private _http: HttpClient) {}

	getPlanets(): Observable<Planet[]> {
		return this._http
			.get<Planet[]>("https://swapi.co/api/planets")
			.pipe(map((response: any) => response.results));
	}
}
