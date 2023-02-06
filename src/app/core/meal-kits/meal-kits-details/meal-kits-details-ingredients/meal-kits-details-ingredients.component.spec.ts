import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsIngredientsComponent } from './meal-kits-details-ingredients.component';

describe('MealKitsDetailsIngredientsComponent', () => {
  let component: MealKitsDetailsIngredientsComponent;
  let fixture: ComponentFixture<MealKitsDetailsIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
