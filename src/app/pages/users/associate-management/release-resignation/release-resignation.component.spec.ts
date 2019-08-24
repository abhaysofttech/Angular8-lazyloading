import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseResignationComponent } from './release-resignation.component';

describe('ReleaseResignationComponent', () => {
  let component: ReleaseResignationComponent;
  let fixture: ComponentFixture<ReleaseResignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseResignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseResignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
