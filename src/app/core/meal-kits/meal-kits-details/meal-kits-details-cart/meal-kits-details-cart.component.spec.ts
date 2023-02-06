import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsCartComponent } from './meal-kits-details-cart.component';

describe('MealKitsDetailsCartComponent', () => {
  let component: MealKitsDetailsCartComponent;
  let fixture: ComponentFixture<MealKitsDetailsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
