import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsDetailsComponent } from './meal-kits-details.component';

describe('MealKitsDetailsComponent', () => {
  let component: MealKitsDetailsComponent;
  let fixture: ComponentFixture<MealKitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
