import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInicialComponent } from './login-inicial.component';

describe('LoginInicialComponent', () => {
  let component: LoginInicialComponent;
  let fixture: ComponentFixture<LoginInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
