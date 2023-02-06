import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailsComponent } from './chef-table-details.component';

describe('ChefTableDetailsComponent', () => {
  let component: ChefTableDetailsComponent;
  let fixture: ComponentFixture<ChefTableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
