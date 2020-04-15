import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherItemComponent } from './weather-item.component';
import { TemperatureConverterPipe } from '../../shared/pipes/temperature-converter.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('WeatherItemComponent', () => {
  let component: WeatherItemComponent;
  let fixture: ComponentFixture<WeatherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ WeatherItemComponent, TemperatureConverterPipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
