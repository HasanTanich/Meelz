import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsTabCheftableComponent } from './chef-details-tab-cheftable.component';

describe('ChefDetailsTabCheftableComponent', () => {
  let component: ChefDetailsTabCheftableComponent;
  let fixture: ComponentFixture<ChefDetailsTabCheftableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsTabCheftableComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsTabCheftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
