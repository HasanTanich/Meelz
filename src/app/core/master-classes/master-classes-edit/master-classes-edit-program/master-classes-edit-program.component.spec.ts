import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassesEditProgramComponent } from './master-classes-edit-program.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatDialogModule } from '@angular/material/dialog';

describe('MasterClassesEditProgramComponent', () => {
  let component: MasterClassesEditProgramComponent;
  let fixture: ComponentFixture<MasterClassesEditProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassesEditProgramComponent ],
      imports:[MatDialogModule]
    })
    .compileComponents();
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasterClassesEditProgramComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassesEditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
