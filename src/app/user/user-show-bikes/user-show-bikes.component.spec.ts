import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowBikesComponent } from './user-show-bikes.component';

describe('UserShowBikesComponent', () => {
  let component: UserShowBikesComponent;
  let fixture: ComponentFixture<UserShowBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowBikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShowBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
