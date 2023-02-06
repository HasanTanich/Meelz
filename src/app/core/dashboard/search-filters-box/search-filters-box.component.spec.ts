import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersBoxComponent } from './search-filters-box.component';

describe('SearchFiltersBoxComponent', () => {
  let component: SearchFiltersBoxComponent;
  let fixture: ComponentFixture<SearchFiltersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFiltersBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFiltersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
