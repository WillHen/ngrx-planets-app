import { Planet } from "../../models/planet.model";
import {
    initializePlanetState,
    PlanetListState,
    PlanetState
} from "./planet.state";
import * as PlanetActions from "./planet.actions";

export type Action = PlanetActions.Actions;

const defaultPlanetStates: PlanetState[] = [
    {
        ...initializePlanetState()
    }
]

const initialState: PlanetListState = {
    planets: defaultPlanetStates,
    loading: false
};

export function PlanetsReducer(state = initialState, action: Action) {

    switch (action.type) {
        case PlanetActions.FETCH_PLANETS: {
            return {
                ...state,
                loading: true
            };
        }
        case PlanetActions.FETCH_PLANETS_DONE: {
            return {
                ...state,
                loading: false,
                planets: action.payload
            };
        }

        default: {
            return state
        }
    }
}
