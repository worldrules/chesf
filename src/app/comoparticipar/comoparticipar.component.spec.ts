import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoparticiparComponent } from './comoparticipar.component';

describe('ComoparticiparComponent', () => {
  let component: ComoparticiparComponent;
  let fixture: ComponentFixture<ComoparticiparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoparticiparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoparticiparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
