import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosdesegurancaComponent } from './planosdeseguranca.component';

describe('PlanodesegurancaComponent', () => {
  let component: PlanosdesegurancaComponent;
  let fixture: ComponentFixture<PlanosdesegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosdesegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosdesegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
