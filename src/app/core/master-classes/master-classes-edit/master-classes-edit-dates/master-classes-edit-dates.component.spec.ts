import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassesEditDatesComponent } from './master-classes-edit-dates.component';

describe('MasterClassesEditDatesComponent', () => {
  let component: MasterClassesEditDatesComponent;
  let fixture: ComponentFixture<MasterClassesEditDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassesEditDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassesEditDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
