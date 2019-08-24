import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingComponent } from './skill-mapping.component';

describe('SkillMappingComponent', () => {
  let component: SkillMappingComponent;
  let fixture: ComponentFixture<SkillMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
