import { Component, Input } from '@angular/core';
import { Weather } from './weather';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent {
    // tslint:disable-next-line:no-input-rename
    @Input('WeatherItem') weather: Weather;
}
