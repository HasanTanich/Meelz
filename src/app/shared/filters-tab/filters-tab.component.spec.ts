import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersTab } from './filters-tab.component';

describe('FiltersTab', () => {
  let component: FiltersTab;
  let fixture: ComponentFixture<FiltersTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersTab]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
