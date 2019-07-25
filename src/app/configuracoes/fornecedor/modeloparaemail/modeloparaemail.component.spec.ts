import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloParaEmailComponent } from './modeloparaemail.component';

describe('ModeloParaEmailComponent', () => {
  let component: ModeloParaEmailComponent;
  let fixture: ComponentFixture<ModeloParaEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloParaEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloParaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
