import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorSituacaoComponent } from './porsituacao.component';

describe('PorSituacaoComponent', () => {
  let component: PorSituacaoComponent;
  let fixture: ComponentFixture<PorSituacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorSituacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
