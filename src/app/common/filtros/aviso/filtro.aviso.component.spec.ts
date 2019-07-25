import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAvisoComponent } from './filtro.aviso.component';

describe('FiltroAvisoComponent', () => {
  let component: FiltroAvisoComponent;
  let fixture: ComponentFixture<FiltroAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
