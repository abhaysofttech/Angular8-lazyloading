import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandForecastingComponent } from './demand-forecasting.component';

describe('DemandForecastingComponent', () => {
  let component: DemandForecastingComponent;
  let fixture: ComponentFixture<DemandForecastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandForecastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
