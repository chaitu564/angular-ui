import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';




@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  cityName: string = '';
  lstWeatherData: any[] = [];
  lstCityDetails: any[] = [];
  lstWeatherDetails: any[] = [];
  constructor(private service: ApiServiceService) {

  }

  ngOnInit() {
    this.toGetWeatherDetails();
  }
  addLocation(name: string) {

    if (name != '' || name != null) {
      let CityDetailsArr = this.lstWeatherData.filter(e => e.name.toLowerCase() == name.toLowerCase());
      console.log(this.lstCityDetails);
      CityDetailsArr.forEach(e => {
        if (!this.lstCityDetails.some(a => a.cityName == name)) {
          let currentStatus = e.weather.find((ele: any) => ele).main;
          let currentTemp = e.weather.find((ele: any) => ele).temp;
          let obj = {
            cityName: e.name,
            status: currentStatus,
            temp: currentTemp
          }

          this.lstCityDetails.push(obj);
        }

      }
      );
    }



  }

  toGetWeatherDetails() {
    this.service.weatherAPIData().subscribe(res => {
      this.lstWeatherData = res;
      console.log(this.lstWeatherData);

    }
    )
  }

  delete(index: number) {
    this.lstCityDetails.splice(index, 1);
  }
  refresh(index: number) {

    let refreshValue = this.lstCityDetails[index]
    if (refreshValue) {
      this.lstCityDetails.splice(index, 1);
      this.lstCityDetails.push({ ...refreshValue });
    }
  }

  cancel() {
    this.lstCityDetails = [];
  }

  showWeatherDetails(index: number) {
    this.lstWeatherDetails = [];

    let findSelectedCityName = this.lstCityDetails[index];
    let selectedWeatherDetails = this.lstWeatherData.find(w => w.name.toLowerCase() == findSelectedCityName.cityName.toLowerCase())
    console.log(selectedWeatherDetails);
    let temparature = selectedWeatherDetails.weather.find((a: any) => a)?.temp;
    let status = selectedWeatherDetails.weather.find((a: any) => a)?.main;
    let icon = status.toLowerCase() == 'rain' ? '/assets/rainy-1.svg' : status.toLowerCase() == 'Cloudy' ? '/assets/cloudy.svg' : '/assets/day.svg'
    let obj1 = {
      city: selectedWeatherDetails.name,
      weatherStatus: status,
      temparature: temparature,
      windSpeed: selectedWeatherDetails.wind?.speed,
      windDeg: selectedWeatherDetails.wind?.deg,
      pressure: selectedWeatherDetails.main.pressure,
      weatherIcon: icon,
      weeklyWeather: [{}]
    }

    selectedWeatherDetails.weeklyWeather.forEach((e: any, i: number) => {
      if (i < 7) {
        let date = new Date();
        let day = i == 0 ? date.getDay() : date.getDay() + i;
        const dayIndex = date.getDate();
        let weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let findTemp = selectedWeatherDetails.weeklyWeather.find((a: any) => a.day == weekNames[day])?.temp;
        let status = selectedWeatherDetails.weeklyWeather.find((a: any) => a.day == weekNames[day])?.status
        let obj2 = {
          day: weekNames[day],
          icon: status.toLowerCase() == 'rain' ? '/assets/rainy-1.svg' : status.toLowerCase() == 'cloudy' ? '/assets/cloudy.svg' : '/assets/day.svg',
          date: i == 0 ? dayIndex : dayIndex + i,
          temp: findTemp
        }
       
          obj1.weeklyWeather.push(obj2);
      
        
      }

    }
    );
    this.lstWeatherDetails.push(obj1);

  }

  rigthRefresh(index: number) {
    this.showWeatherDetails(index);
  }

}
