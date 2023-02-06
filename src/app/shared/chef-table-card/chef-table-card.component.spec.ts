import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableCardComponent } from './chef-table-card.component';

describe('ChefTableCardComponent', () => {
  let component: ChefTableCardComponent;
  let fixture: ComponentFixture<ChefTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
