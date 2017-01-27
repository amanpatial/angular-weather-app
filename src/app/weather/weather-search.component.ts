import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any[];

    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
    }

    onSubmit(cityName: string) {
    // console.log(cityName);
     this._weatherService.getWeatherForecast(cityName)
         .subscribe(data => {this.weatherForecastData = data}, 
                    error =>  this.errorMessage = <any>error,            
     );
    }
    
    onSearchLocation(cityName:string) {
     console.log(cityName);
    }

}