import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritosPorCidadeComponent } from './inscritosporcidade.component';

describe('InscritosPorCidadeComponent', () => {
  let component: InscritosPorCidadeComponent;
  let fixture: ComponentFixture<InscritosPorCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscritosPorCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritosPorCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
