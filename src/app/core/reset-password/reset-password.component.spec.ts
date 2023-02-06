// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialogModule } from '@angular/material/dialog';

// import { ResetPasswordComponent } from './reset-password.component';

// describe('ResetPasswordComponent', () => {
//   let component: ResetPasswordComponent;
//   let fixture: ComponentFixture<ResetPasswordComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ResetPasswordComponent ],
//       imports:[MatDialogModule]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ResetPasswordComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });




import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialogModule } from '@angular/material/dialog';

let jwtHelper: JwtHelperService;
const testBedConfiguration = {
  imports: [
    RouterTestingModule.withRoutes([]),
    HttpClientTestingModule,
    MatDialogModule,
    JwtModule.forRoot({ // for JwtHelperService
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    })
  ],
  providers: [
    AuthService,
    JwtHelperService
  ]
}

describe('ResetPasswordComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testBedConfiguration);
    jwtHelper = TestBed.get(JwtHelperService);
  });

  it('should ...', inject([AuthService], (guard: AuthService) => {
    expect(guard).toBeTruthy();
  }));
});


