import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwfDashboardComponent } from './rwf-dashboard.component';

describe('RwfDashboardComponent', () => {
  let component: RwfDashboardComponent;
  let fixture: ComponentFixture<RwfDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwfDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
