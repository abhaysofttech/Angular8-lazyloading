import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateEvaluateComponent } from './associate-evaluate.component';

describe('AssociateEvaluateComponent', () => {
  let component: AssociateEvaluateComponent;
  let fixture: ComponentFixture<AssociateEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
