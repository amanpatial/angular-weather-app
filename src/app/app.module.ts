import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherService } from './weather/weather.service';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SignoutComponent } from './auth/signout/signout.component';
import { TemperatureConverterPipe } from './shared/pipes/temperature-converter-pipe';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherItemComponent,
    HeaderComponent,
    PageNotFoundComponent,
    WeatherTodayComponent,
    SigninComponent,
    SignupComponent,
    SignoutComponent,
    TemperatureConverterPipe
  ],

  providers: [WeatherService, AuthService, AuthGuard, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
