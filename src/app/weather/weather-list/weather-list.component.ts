import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
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
