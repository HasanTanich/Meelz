import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsTabChefstoreComponent } from './chef-details-tab-chefstore.component';

describe('ChefDetailsTabChefstoreComponent', () => {
  let component: ChefDetailsTabChefstoreComponent;
  let fixture: ComponentFixture<ChefDetailsTabChefstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsTabChefstoreComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsTabChefstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
