import { TestBed } from '@angular/core/testing';

import { TrendingMenuCartService } from './trending-menu-cart.service';

describe('TrendingMenuCartService', () => {
  let service: TrendingMenuCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingMenuCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
