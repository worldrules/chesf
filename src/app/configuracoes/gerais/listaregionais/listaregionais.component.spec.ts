import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegionaisComponent } from './listaregionais.component';

describe('ListaRegionaisComponent', () => {
  let component: ListaRegionaisComponent;
  let fixture: ComponentFixture<ListaRegionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRegionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
