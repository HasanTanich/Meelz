import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassesEditComponent } from './master-classes-edit.component';

describe('MasterClassesEditComponent', () => {
  let component: MasterClassesEditComponent;
  let fixture: ComponentFixture<MasterClassesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
