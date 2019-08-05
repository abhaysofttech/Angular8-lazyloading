import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwfTransactionComponent } from './rwf-transaction.component';

describe('RwfTransactionComponent', () => {
  let component: RwfTransactionComponent;
  let fixture: ComponentFixture<RwfTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwfTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwfTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
