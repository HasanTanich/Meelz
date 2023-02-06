import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsTabMeelzComponent } from './chef-details-tab-meelz.component';

describe('ChefDetailsTabMeelzComponent', () => {
  let component: ChefDetailsTabMeelzComponent;
  let fixture: ComponentFixture<ChefDetailsTabMeelzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsTabMeelzComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsTabMeelzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
