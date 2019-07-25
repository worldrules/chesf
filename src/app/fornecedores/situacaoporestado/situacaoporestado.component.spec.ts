import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoPorEstadoComponent } from './situacaoporestado.component';

describe('SituacaoPorEstadoComponent', () => {
  let component: SituacaoPorEstadoComponent;
  let fixture: ComponentFixture<SituacaoPorEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacaoPorEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
