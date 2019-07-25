import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiradosComponent } from './expirados.component';

describe('ExpiradosComponent', () => {
  let component: ExpiradosComponent;
  let fixture: ComponentFixture<ExpiradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
