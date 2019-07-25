import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDownloadsComponent } from './registrodownloads.component';

describe('RegistroDownloadsComponent', () => {
  let component: RegistroDownloadsComponent;
  let fixture: ComponentFixture<RegistroDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
