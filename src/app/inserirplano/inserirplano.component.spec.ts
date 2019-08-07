import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirplanoComponent } from './inserirplano.component';

describe('InserirplanoComponent', () => {
  let component: InserirplanoComponent;
  let fixture: ComponentFixture<InserirplanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirplanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirplanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
