import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitCardComponent } from './meal-kit-card.component';

describe('MealKitCardComponent', () => {
  let component: MealKitCardComponent;
  let fixture: ComponentFixture<MealKitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
