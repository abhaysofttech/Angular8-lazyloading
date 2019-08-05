import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwfManagementComponent } from './rwf-management.component';

describe('RwfManagementComponent', () => {
  let component: RwfManagementComponent;
  let fixture: ComponentFixture<RwfManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwfManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwfManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
