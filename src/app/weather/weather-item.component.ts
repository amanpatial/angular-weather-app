import { Component, Input } from '@angular/core';
import { Weather } from './weather';
@Component({
	selector: 'app-weather-item',
	template: `<article class="weather-element">
	            <div class="col-1">
                <h3> {{ weather.weather[0].description }}</h3>
                <p class="info">Wind speed: {{ weather.wind.speed}}</p>
                </div>
                <div class="col-2">
                <span class="temperature">Temperature :{{ weather.main.temp }} C</span>
               </div>
             </article>`
     //inputs: ['weatherItem']        
})
export class WeatherItemComponent {
    @Input('item') weather: Weather;
   // constructor(){ 
     //   this.weather = new Weather('Amritsar', 'Cloudy', 24); 
   // }
}