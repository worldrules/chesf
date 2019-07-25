import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaSenhaComponent } from './trocasenha.component';

describe('TrocaSenhaComponent', () => {
  let component: TrocaSenhaComponent;
  let fixture: ComponentFixture<TrocaSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
