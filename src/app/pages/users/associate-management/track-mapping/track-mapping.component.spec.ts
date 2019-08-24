import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMappingComponent } from './track-mapping.component';

describe('TrackMappingComponent', () => {
  let component: TrackMappingComponent;
  let fixture: ComponentFixture<TrackMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
