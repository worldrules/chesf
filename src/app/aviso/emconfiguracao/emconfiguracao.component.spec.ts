import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmConfiguracaoComponent } from './emconfiguracao.component';

describe('EmConfiguracaoComponent', () => {
  let component: EmConfiguracaoComponent;
  let fixture: ComponentFixture<EmConfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmConfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
