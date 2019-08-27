import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFiveWindowRatingWithWeightageComponent } from './twenty-five-window-rating-with-weightage.component';

describe('TwentyFiveWindowRatingWithWeightageComponent', () => {
  let component: TwentyFiveWindowRatingWithWeightageComponent;
  let fixture: ComponentFixture<TwentyFiveWindowRatingWithWeightageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFiveWindowRatingWithWeightageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFiveWindowRatingWithWeightageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
