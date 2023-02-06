import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailsHeaderComponent } from './chef-table-details-header.component';

describe('ChefTableDetailsHeaderComponent', () => {
  let component: ChefTableDetailsHeaderComponent;
  let fixture: ComponentFixture<ChefTableDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
