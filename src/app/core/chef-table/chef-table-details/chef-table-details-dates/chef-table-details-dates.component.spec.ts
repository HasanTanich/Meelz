import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailsDatesComponent } from './chef-table-details-dates.component';

describe('ChefTableDetailsDatesComponent', () => {
  let component: ChefTableDetailsDatesComponent;
  let fixture: ComponentFixture<ChefTableDetailsDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailsDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
