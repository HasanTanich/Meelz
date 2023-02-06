import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassesEditParticipateComponent } from './master-classes-edit-participate.component';

describe('MasterClassesEditParticipateComponent', () => {
  let component: MasterClassesEditParticipateComponent;
  let fixture: ComponentFixture<MasterClassesEditParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassesEditParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassesEditParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
