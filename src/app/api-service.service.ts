import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private initialCountNo = new BehaviorSubject<number>(0);
  counterLength = this.initialCountNo.asObservable();
  constructor(private http:HttpClient) { }

  updateCounterLength(value: number) {
    this.initialCountNo.next(value);
  }

weatherAPIData():Observable<any>
{
// return this.http.get('https://openweathermap.org/api').pipe(map(data => data))
return this.http.get('/assets/APIData.JSON').pipe(map(data => data))
}

}
