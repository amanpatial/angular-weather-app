import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import {WeatherService} from './weather/weather.service';

@NgModule({

  imports: [ BrowserModule, FormsModule, HttpModule ],

  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherItemComponent,
  
  ],
  
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
