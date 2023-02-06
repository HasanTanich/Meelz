import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsInfoComponent } from './meal-kits-details-info.component';

describe('MealKitsDetailsInfoComponent', () => {
  let component: MealKitsDetailsInfoComponent;
  let fixture: ComponentFixture<MealKitsDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
