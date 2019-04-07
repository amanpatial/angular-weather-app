import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserModule, FormsModule, ReactiveFormsModule],
      declarations: [ SignupComponent ]
    }).compileComponents().then(()=>{
      // create component and test fixture
      fixture = TestBed.createComponent(SignupComponent);
      // get test component from the fixture
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
      fixture.detectChanges();
    });
  }));

  it('should create', async() => {
    expect(component).toBeTruthy();
  });
   
  it ('should set submitted to true', async()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call onSubmit() method', async()=>{
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid', async()=>{
     component.signupForm.controls['name'].setValue('');
     component.signupForm.controls['email'].setValue('');
     component.signupForm.controls['password'].setValue('');
     expect(component.signupForm.valid).toBeFalsy();
  });

  it('form should be valid', async()=>{
    component.signupForm.controls['name'].setValue('aman');
    component.signupForm.controls['email'].setValue('aman.patial@gmail.com');
    component.signupForm.controls['password'].setValue('Am$1245');
    expect(component.signupForm.valid).toBeTruthy();
  });

});
