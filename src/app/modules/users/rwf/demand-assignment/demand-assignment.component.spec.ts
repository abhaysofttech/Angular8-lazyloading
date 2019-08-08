import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandAssignmentComponent } from './demand-assignment.component';

describe('DemandAssignmentComponent', () => {
  let component: DemandAssignmentComponent;
  let fixture: ComponentFixture<DemandAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
