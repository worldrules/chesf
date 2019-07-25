import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesconfiguracaoComponent } from './detalhesconfiguracao.component';

describe('DetalhesconfiguracaoComponent', () => {
  let component: DetalhesconfiguracaoComponent;
  let fixture: ComponentFixture<DetalhesconfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesconfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesconfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
