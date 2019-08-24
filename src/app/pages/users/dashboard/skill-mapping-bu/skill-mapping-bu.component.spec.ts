import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingBuComponent } from './skill-mapping-bu.component';

describe('SkillMappingBuComponent', () => {
  let component: SkillMappingBuComponent;
  let fixture: ComponentFixture<SkillMappingBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMappingBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMappingBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
