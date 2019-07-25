import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNaoPublicadoComponent } from './detalheNaoPublicado.component';

describe('DetalhesnaopublicadoComponent', () => {
  let component: DetalheNaoPublicadoComponent;
  let fixture: ComponentFixture<DetalheNaoPublicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheNaoPublicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheNaoPublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
