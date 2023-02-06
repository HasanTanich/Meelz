import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsCartComponent } from './menu-details-cart.component';

describe('MenuDetailsCartComponent', () => {
  let component: MenuDetailsCartComponent;
  let fixture: ComponentFixture<MenuDetailsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
