import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheExpiradoComponent } from './detalheExpirado.component';

describe('DetalhesexpiradoComponent', () => {
  let component: DetalheExpiradoComponent;
  let fixture: ComponentFixture<DetalheExpiradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheExpiradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheExpiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
