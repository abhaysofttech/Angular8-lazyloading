import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingMyteamComponent } from './skill-mapping-myteam.component';

describe('SkillMappingMyteamComponent', () => {
  let component: SkillMappingMyteamComponent;
  let fixture: ComponentFixture<SkillMappingMyteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMappingMyteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMappingMyteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
