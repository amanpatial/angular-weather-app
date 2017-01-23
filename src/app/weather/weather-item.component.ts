import { Component, Input } from '@angular/core';
import { Weather } from './weather';

@Component({
	selector: 'app-weather-item',
  templateUrl: './weather-item.component.html'   
  //inputs: ['weatherItem']        
})
export class WeatherItemComponent {
    @Input('item') weather: Weather;
   // constructor(){ 
  //   this.weather = new Weather('Amritsar', 'Cloudy', 24); 
   // }
}