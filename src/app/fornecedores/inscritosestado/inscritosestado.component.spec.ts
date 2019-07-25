import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritosEstadoComponent } from './inscritosestado.component';

describe('InscritosEstadoComponent', () => {
  let component: InscritosEstadoComponent;
  let fixture: ComponentFixture<InscritosEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscritosEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritosEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
