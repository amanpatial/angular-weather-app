import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('WeatherForecastList') weathers: any;
  errorMessage: string;
  selectedItem: String = 'nothing';

  constructor() {
  }

  ngOnInit(): any {
  }

  updateSelectedWeatherItem(event: any) {
    console.log('Recieved selected weather item in list component', event);
    this.selectedItem = event;
  }


}

