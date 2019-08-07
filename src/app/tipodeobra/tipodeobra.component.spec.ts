import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodeobraComponent } from './tipodeobra.component';

describe('TipodeobraComponent', () => {
  let component: TipodeobraComponent;
  let fixture: ComponentFixture<TipodeobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodeobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodeobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
