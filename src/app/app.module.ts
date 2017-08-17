import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import {WeatherService} from './weather/weather.service';
//import { PdfComponent } from './pdf/pdf.component';

@NgModule({

  imports: [ BrowserModule, FormsModule, HttpModule ],

  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherItemComponent
  //  PdfComponent,
  
  ],
  
  providers: [WeatherService,  { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
