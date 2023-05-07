import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderHistoryComponent } from './lender-history.component';

describe('LenderHistoryComponent', () => {
  let component: LenderHistoryComponent;
  let fixture: ComponentFixture<LenderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
