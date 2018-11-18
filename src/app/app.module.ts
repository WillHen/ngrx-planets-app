import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { PlanetsReducer } from "./store/planet/planet.reducer";
import { PlanetEffects } from "./store/planet/planet.effects";

import { PlanetComponent } from "./components/planet/planet.component";
import { PlanetListComponent } from "./components/planet-list/planet-list.component";
import { PlanetsService } from "./services/planets.service";

@NgModule({
  declarations: [AppComponent, PlanetComponent, PlanetListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ coreState: PlanetsReducer }),
    EffectsModule.forRoot([PlanetEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
