import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import * as PlanetActions from "../../store/planet/planet.actions";
import { PlanetsService } from "../../services/planets.service";

@Injectable()
export class PlanetEffects {
    @Effect()
    fetchPlanets$: Observable<Action> = this.actions$.pipe(
        ofType(PlanetActions.FETCH_PLANETS),
        switchMap(query => {
            return this._planetsService.getPlanets().pipe(
                map(planets => {
                    return new PlanetActions.FetchPlanetsDone(planets);
                })
            );
        })
    );
    // catch(() => of(new FoodActions.FetchFoodFail())

    constructor(
        private actions$: Actions,
        private _planetsService: PlanetsService
    ) {}
}
