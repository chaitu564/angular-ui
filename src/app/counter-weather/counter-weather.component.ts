import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-counter-weather',
  templateUrl: './counter-weather.component.html',
  styleUrls: ['./counter-weather.component.scss']
})
export class CounterWeatherComponent implements OnInit {
  selectedCountNo:number = 0;
  constructor(private router: Router,
    private service:ApiServiceService
  ) { }

  ngOnInit() {
this.service.counterLength.subscribe(res => {
  this.selectedCountNo = res;
});
  }
  onRoute(value: string) {
    if (value == "weather") {
      this.router.navigateByUrl('/vatavaran')
    }
    else if(value == "counter")
    {
      this.router.navigateByUrl('/counter')
    }
  }

}
