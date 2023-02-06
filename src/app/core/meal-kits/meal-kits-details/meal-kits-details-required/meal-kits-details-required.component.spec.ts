import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsRequiredComponent } from './meal-kits-details-required.component';

describe('MealKitsDetailsRequiredComponent', () => {
  let component: MealKitsDetailsRequiredComponent;
  let fixture: ComponentFixture<MealKitsDetailsRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
