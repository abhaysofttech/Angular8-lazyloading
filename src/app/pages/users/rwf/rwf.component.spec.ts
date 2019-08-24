import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwfComponent } from './rwf.component';

describe('RwfComponent', () => {
  let component: RwfComponent;
  let fixture: ComponentFixture<RwfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
