import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPaginatorComponent } from './top-paginator.component';

describe('TopPaginatorComponent', () => {
  let component: TopPaginatorComponent;
  let fixture: ComponentFixture<TopPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
