import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFornecedoresComponent } from './basefornecedores.component';

describe('BaseFornecedoresComponent', () => {
  let component: BaseFornecedoresComponent;
  let fixture: ComponentFixture<BaseFornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
