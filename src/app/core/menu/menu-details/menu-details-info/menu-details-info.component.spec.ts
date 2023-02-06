import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsInfoComponent } from './menu-details-info.component';

describe('MenuDetailsInfoComponent', () => {
  let component: MenuDetailsInfoComponent;
  let fixture: ComponentFixture<MenuDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
