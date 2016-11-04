import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WEATHER_LIST } from './weather.data';
@Component({
  selector: 'app-weather',
  template: `<app-weather-item *ngFor="let weather of weathers" [item]="weather"></app-weather-item>`,
  //templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[];

  ngOnInit():any {
  	this.weathers = WEATHER_LIST;
  }

}
