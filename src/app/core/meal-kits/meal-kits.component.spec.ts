import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKitsComponent } from './meal-kits.component';

describe('MealKitsComponent', () => {
  let component: MealKitsComponent;
  let fixture: ComponentFixture<MealKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealKitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
