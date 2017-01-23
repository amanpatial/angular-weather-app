import { Injectable } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const APPID = '45f4dd45e0f724512ba044c5a2caf4bc';

@Injectable()
export class WeatherService {
  
  private baseUrl='http://api.openweathermap.org/data/2.5/';

  constructor(private http: Http) { }
  
  getWeatherItems(){
    	return WEATHER_LIST;
  } 

  getWeatheritemsbyCity(cityName): Observable<any>{

    	 return this.http.get(this.baseUrl +'weather?q='+ cityName +'&appid='+ APPID)
    	 .map(response => response.json())
    	 .catch(this.handleError);
  }

  getWeatherForecast(cityName): Observable<any[]>{

     return this.http.get(this.baseUrl+'forecast?q='+ cityName +'&appid='+ APPID)
     .map(response => this.extractData(response))
     .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
      errMsg = error.message ? error.message : error.toString();
    //}
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}