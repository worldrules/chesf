import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePublicadoComponent } from './detalhePublicado.component';

describe('DetalhespublicadoComponent', () => {
  let component: DetalhePublicadoComponent;
  let fixture: ComponentFixture<DetalhePublicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePublicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
