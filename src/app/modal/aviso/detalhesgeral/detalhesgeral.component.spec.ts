import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGeralComponent } from './detalheGeral.component';

describe('DetalhesgeralComponent', () => {
  let component: DetalheGeralComponent;
  let fixture: ComponentFixture<DetalheGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
