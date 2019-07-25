import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEmailComponent } from './modeloemail.component';

describe('ModeloEmailComponent', () => {
  let component: ModeloEmailComponent;
  let fixture: ComponentFixture<ModeloEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
