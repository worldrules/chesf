import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProgramadoComponent } from './detalheProgramado.component';

describe('DetalhesprogramadoComponent', () => {
  let component: DetalheProgramadoComponent;
  let fixture: ComponentFixture<DetalheProgramadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProgramadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProgramadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
