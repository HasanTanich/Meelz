import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTableDetailInfoComponent } from './chef-table-detail-info.component';

describe('ChefTableDetailInfoComponent', () => {
  let component: ChefTableDetailInfoComponent;
  let fixture: ComponentFixture<ChefTableDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefTableDetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTableDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
