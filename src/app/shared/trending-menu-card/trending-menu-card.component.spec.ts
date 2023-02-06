import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMenuCardComponent } from './trending-menu-card.component';

describe('TrendingMenuCardComponent', () => {
  let component: TrendingMenuCardComponent;
  let fixture: ComponentFixture<TrendingMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMenuCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
