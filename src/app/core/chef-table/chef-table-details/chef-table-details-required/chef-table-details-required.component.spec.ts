import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailsRequiredComponent } from './chef-table-details-required.component';

describe('ChefTableDetailsRequiredComponent', () => {
  let component: ChefTableDetailsRequiredComponent;
  let fixture: ComponentFixture<ChefTableDetailsRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailsRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailsRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
