import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsCarouselComponent } from './menu-details-carousel.component';

describe('MenuDetailsCarouselComponent', () => {
  let component: MenuDetailsCarouselComponent;
  let fixture: ComponentFixture<MenuDetailsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
