import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailMenuComponent } from './chef-table-detail-menu.component';

describe('ChefTableDetailMenuComponent', () => {
  let component: ChefTableDetailMenuComponent;
  let fixture: ComponentFixture<ChefTableDetailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
