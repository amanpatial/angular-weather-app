import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
//import { WEATHER_LIST } from './weather.data';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  template: `<app-weather-item *ngFor="let weather of weathers" [item]="weather"></app-weather-item>`,
  //templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  weathers: Weather[];

  constructor(private _weatherService: WeatherService){

  }

  ngOnInit():any {
  	//this.weathers = WEATHER_LIST;
    //`this.weathers = this._weatherService.getWeatherItems();
    this._weatherService.getWeatheritemsbyCity('Amritsar').subscribe( data => console.log(data.name , data.cod));
  	// this.weathers = this._weatherService.getWeatheritemsbyCity()
   //  .subscribe(

   //    data => {
   //      const weather = new Weather( data.name, data.name, data.cod);
   //      weathers.push(weather);

   //  })
  }

}
