import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisolicitacaoComponent } from './avisolicitacao.component';

describe('AvisolicitacaoComponent', () => {
  let component: AvisolicitacaoComponent;
  let fixture: ComponentFixture<AvisolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
