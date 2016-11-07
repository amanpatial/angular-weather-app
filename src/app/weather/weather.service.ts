import { Injectable } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
const APPID = '45f4dd45e0f724512ba044c5a2caf4bc';

@Injectable()
export class WeatherService {
  
  constructor(private _http: Http) { }
  
  getWeatherItems(){
  	return WEATHER_LIST;
  } 
  getWeatheritemsbyCity(cityName): Observable<any>{
  	 return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid='+ APPID)
  	 .map(response => response.json())
  	 .catch(error => {
          console.error(error);
          return Observable.throw(error.json())
  	 });

  }
}