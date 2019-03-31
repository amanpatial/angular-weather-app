import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any;
    disabledForecastButton: boolean;
    cityName: string;

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit() {
    }
    onSubmit(cityName: string) {
        console.log(cityName);
        this._weatherService.getWeatherForecast(cityName)
            .subscribe(data => { this.weatherForecastData = data.list }, error => this.errorMessage = <any>error);
    }

    onSearchLocation(cityName: string) {
        this.disabledForecastButton = false;
        console.log(cityName);
    }

    onSubmitDatabinding() {
        console.log('Inside the two way', this.cityName);
        this._weatherService.getWeatherForecast(this.cityName)
            .subscribe(data => { this.weatherForecastData = data.list }, error => this.errorMessage = <any>error);
        this.onResetControls();
    }

    onSearchLocationWithEvent(event: Event) {
        console.log('Control event value', (<HTMLInputElement>event.target).value);
        this.cityName = (<HTMLInputElement>event.target).value;
        this.disabledForecastButton = false;
    }

    onResetControls() {
        this.cityName = '';
        this.disabledForecastButton = true;
    }
}
