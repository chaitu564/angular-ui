import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  // { path: '', redirectTo: "dash-board", pathMatch: "prefix" },
  { path: '', redirectTo: "counter-weather", pathMatch: "prefix" },
  { path: "dash-board", component: DashBoardComponent },
  { path: 'counter-weather', loadChildren: () => import('./counter-weather/counter-weather.module').then(m => m.CounterWeatherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
