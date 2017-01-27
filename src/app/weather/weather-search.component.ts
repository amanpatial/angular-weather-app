import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form (ngSubmit)="onSubmit()">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)" required #input>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span> {{data.name}}
            </div>
        </section>
    `
})
export class WeatherSearchComponent implements OnInit {
    private searchStream = new Subject<string>();
    data: any = {};

    constructor(private _weatherService:WeatherService) {
    }

    onSubmit() {

    }

    onSearchLocation(cityName:string) {
    
    }

    ngOnInit() {
    }
}