import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsTabMasterclassesComponent } from './chef-details-tab-masterclasses.component';

describe('ChefDetailsTabMasterclassesComponent', () => {
  let component: ChefDetailsTabMasterclassesComponent;
  let fixture: ComponentFixture<ChefDetailsTabMasterclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsTabMasterclassesComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsTabMasterclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
