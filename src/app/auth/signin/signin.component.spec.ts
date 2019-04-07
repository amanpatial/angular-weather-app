import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports:[BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [AuthService, AppRoutingModule, RouterTestingModule]
    })
  }));

  beforeAll(()=> {
   // runs once for complete unit suites
  })

   // runs before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  //runs after each test
  afterEach(() => {
    // tearn down 
    // perform clean up activity
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
