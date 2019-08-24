import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicheSkillsComponent } from './niche-skills.component';

describe('NicheSkillsComponent', () => {
  let component: NicheSkillsComponent;
  let fixture: ComponentFixture<NicheSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicheSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicheSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
