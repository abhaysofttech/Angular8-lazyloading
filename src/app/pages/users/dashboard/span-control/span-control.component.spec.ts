import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanControlComponent } from './span-control.component';

describe('SpanControlComponent', () => {
  let component: SpanControlComponent;
  let fixture: ComponentFixture<SpanControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
