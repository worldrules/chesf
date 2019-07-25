import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLicitacaoComponent } from './detalheslicitacao.component';

describe('DetalheslicitacaoComponent', () => {
  let component: DetalhesLicitacaoComponent;
  let fixture: ComponentFixture<DetalhesLicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesLicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesLicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
