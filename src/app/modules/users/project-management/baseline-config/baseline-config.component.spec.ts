import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineConfigComponent } from './baseline-config.component';

describe('BaselineConfigComponent', () => {
  let component: BaselineConfigComponent;
  let fixture: ComponentFixture<BaselineConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselineConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
