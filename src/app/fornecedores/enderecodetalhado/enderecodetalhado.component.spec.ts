import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoDetalhadoComponent } from './enderecodetalhado.component';

describe('EnderecoDetalhadoComponent', () => {
  let component: EnderecoDetalhadoComponent;
  let fixture: ComponentFixture<EnderecoDetalhadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoDetalhadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
