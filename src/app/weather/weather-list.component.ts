import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
//import { WEATHER_LIST } from './weather.data';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  //template: `<app-weather-item *ngFor="let weather of weathers" [item]="weather"></app-weather-item>`,
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  
  errorMessage: string;
  weathers: any[];

  constructor(private _weatherService: WeatherService){
  }

  ngOnInit():any {
  	//this.weathers = WEATHER_LIST;
    //this.weathers = this._weatherService.getWeatherItems();
    this._weatherService.getWeatherForecast('Amritsar')
         .subscribe(data => {this.weathers = data}, 
                    error =>  this.errorMessage = <any>error
     );
  }

}
