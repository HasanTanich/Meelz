import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsRecipeComponent } from './meal-kits-details-recipe.component';

describe('MealKitsDetailsRecipeComponent', () => {
  let component: MealKitsDetailsRecipeComponent;
  let fixture: ComponentFixture<MealKitsDetailsRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
