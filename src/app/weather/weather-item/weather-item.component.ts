import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('WeatherItem') weather: Weather;
  //declare event for subscription
  @Output() weatherItemChanges = new EventEmitter();

  ngOnInit(): any {
  }

  selectedWeatherItem(event: Event) {
    var item = (<HTMLDivElement>event.target);
    console.log('Selected div element', item);
    //Raise event
    this.weatherItemChanges.emit(item.innerHTML);
  }
}
