import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorArgumentoComponent } from './porargumento.component';

describe('PorArgumentoComponent', () => {
  let component: PorArgumentoComponent;
  let fixture: ComponentFixture<PorArgumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorArgumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorArgumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
