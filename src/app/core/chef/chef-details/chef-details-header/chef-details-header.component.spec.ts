import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsHeaderComponent } from './chef-details-header.component';

describe('ChefDetailsHeaderComponent', () => {
  let component: ChefDetailsHeaderComponent;
  let fixture: ComponentFixture<ChefDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsHeaderComponent ],
      imports:[HttpClientModule]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
