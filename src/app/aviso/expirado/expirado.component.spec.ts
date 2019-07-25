import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiradoComponent } from './expirado.component';

describe('ExpiradoComponent', () => {
  let component: ExpiradoComponent;
  let fixture: ComponentFixture<ExpiradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
