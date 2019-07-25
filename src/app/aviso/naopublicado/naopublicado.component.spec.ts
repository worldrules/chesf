import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoPublicadoComponent } from './NaoPublicado.component';

describe('NaoPublicadoComponent', () => {
  let component: NaoPublicadoComponent;
  let fixture: ComponentFixture<NaoPublicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoPublicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoPublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
