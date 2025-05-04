import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterWeatherComponent } from './counter-weather.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [{
  path: '', component: CounterWeatherComponent,
  children: [
    { path: '', redirectTo: "counter", pathMatch: "prefix" },
    { path: 'counter', component: CounterAppComponent },
    { path: 'vatavaran', component: WeatherAppComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterWeatherRoutingModule { }
