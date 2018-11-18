import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Planet} from "../../models/planet.model";;

import { Store } from "@ngrx/store";
import * as PlanetActions from "../../store/planet/planet.actions";
import {PlanetState, PlanetListState, initializePlanetState, PlanetLoadState} from "../../store/planet/planet.state"

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  constructor(private store: Store<PlanetLoadState>) { }

  public $planetListState: Observable<Planet[]>

  ngOnInit() {

  	this.$planetListState = this.store.select(state => { return state.coreState.planets });

  	this.store.dispatch(new PlanetActions.FetchPlanets());



  }

}
