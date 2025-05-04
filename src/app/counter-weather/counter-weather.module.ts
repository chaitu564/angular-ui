import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterWeatherRoutingModule } from './counter-weather-routing.module';
import { CounterWeatherComponent } from './counter-weather.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterWeatherComponent,
    CounterAppComponent,
    WeatherAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterWeatherRoutingModule
  ]
})
export class CounterWeatherModule { }
