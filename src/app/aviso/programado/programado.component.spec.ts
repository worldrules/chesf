import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramadoComponent } from './programado.component';

describe('ProgramadoComponent', () => {
  let component: ProgramadoComponent;
  let fixture: ComponentFixture<ProgramadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
