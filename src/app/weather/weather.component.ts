import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `<p>Oye, awesome weather works!</p>
  <app-weather-item></app-weather-item>`,
  //templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
