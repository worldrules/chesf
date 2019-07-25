import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfornecedorComponent } from './loginfornecedor.component';

describe('LoginfornecedorComponent', () => {
  let component: LoginfornecedorComponent;
  let fixture: ComponentFixture<LoginfornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
