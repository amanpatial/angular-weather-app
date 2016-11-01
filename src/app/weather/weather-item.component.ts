import { Component } from '@angular/core';
@Component({
	selector: 'app-weather-item',
	template: `<article class="weather-element">
	            <div class="col-1">
                <h3>Cityname</h3>
                <p class="info">CLOUDS</p>
                </div>
                <div class="col-2">
                <span class="temperature">32°C</span>
               </div>
             </article>`
})
export class WeatherItemComponent {}