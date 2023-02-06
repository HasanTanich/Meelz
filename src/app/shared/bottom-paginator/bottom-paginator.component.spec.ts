import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPaginatorComponent } from './bottom-paginator.component';

describe('BottomPaginatorComponent', () => {
  let component: BottomPaginatorComponent;
  let fixture: ComponentFixture<BottomPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
