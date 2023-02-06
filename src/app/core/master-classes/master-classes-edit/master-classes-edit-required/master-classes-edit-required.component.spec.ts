import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MasterClassesEditRequiredComponent } from './master-classes-edit-required.component';

describe('MasterClassesEditRequiredComponent', () => {
  let component: MasterClassesEditRequiredComponent;
  let fixture: ComponentFixture<MasterClassesEditRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassesEditRequiredComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule 
    ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassesEditRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
