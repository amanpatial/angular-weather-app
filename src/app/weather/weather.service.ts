import { Injectable, Inject } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Weather } from './weather';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
     console.log('Production', environment.production);
  }

  getWeatherItems() {
    return WEATHER_LIST;
  }

  getWeatheritemsbyCity(cityName: string): Observable<any> {
    return this.http.get(
         environment.baseUrl +
         'weather?q=' + cityName +
         '&appid=' + environment.appId +
         '&units=' + environment.units
         )
    .catch(this.handleError);
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
        environment.baseUrl +
        'forecast?q=' + cityName +
        '&appid=' + environment.appId +
        '&units=' + environment.units
       ).catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
