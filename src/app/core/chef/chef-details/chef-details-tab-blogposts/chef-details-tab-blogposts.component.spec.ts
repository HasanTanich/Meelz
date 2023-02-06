import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailsTabBlogpostsComponent } from './chef-details-tab-blogposts.component';

describe('ChefDetailsTabBlogpostsComponent', () => {
  let component: ChefDetailsTabBlogpostsComponent;
  let fixture: ComponentFixture<ChefDetailsTabBlogpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetailsTabBlogpostsComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDetailsTabBlogpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
