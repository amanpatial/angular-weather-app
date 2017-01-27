import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(input.value)">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)" required #input>
                <button type="submit">Search</button>
            </form>
        </section>
    `
})
export class WeatherSearchComponent implements OnInit {

    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
    }

    onSubmit(cityName: string) {
     console.log(cityName);
    }
    
    onSearchLocation(cityName:string) {
     console.log(cityName);
    }

}