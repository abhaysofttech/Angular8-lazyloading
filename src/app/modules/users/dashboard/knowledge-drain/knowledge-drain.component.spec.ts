import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDrainComponent } from './knowledge-drain.component';

describe('KnowledgeDrainComponent', () => {
  let component: KnowledgeDrainComponent;
  let fixture: ComponentFixture<KnowledgeDrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeDrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeDrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
