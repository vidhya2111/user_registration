import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms'

import { UserRegistrationComponent } from './user-registration.component';
import {UserServiceService} from '../user-service.service'
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [HttpClientModule,ReactiveFormsModule,RouterTestingModule],
        providers: [UserServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('mat-form-field')!;
  });
});
