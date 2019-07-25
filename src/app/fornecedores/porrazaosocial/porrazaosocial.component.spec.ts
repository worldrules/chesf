import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorRazaoSocialComponent } from './porrazaosocial.component';

describe('PorRazaoSocialComponent', () => {
  let component: PorRazaoSocialComponent;
  let fixture: ComponentFixture<PorRazaoSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorRazaoSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorRazaoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
