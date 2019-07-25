import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSistemaComponent } from './logsistema.component';

describe('LogSistemaComponent', () => {
  let component: LogSistemaComponent;
  let fixture: ComponentFixture<LogSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
