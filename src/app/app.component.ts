import { Component } from '@angular/core';

@Component({
  selector: 'weather-app-root',
 // template: `<h1> Angular2 Weather App!</h1><app-weather></app-weather>`,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2, Weather app works!';
}
