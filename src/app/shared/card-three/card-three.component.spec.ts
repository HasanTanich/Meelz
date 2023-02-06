// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialogModule } from '@angular/material/dialog';

// import { CardThreeComponent } from './card-three.component';

// describe('CardThreeComponent', () => {
//   let component: CardThreeComponent;
//   let fixture: ComponentFixture<CardThreeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CardThreeComponent ],
//       imports:[MatDialogModule]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CardThreeComponent);
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

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testBedConfiguration);
    jwtHelper = TestBed.get(JwtHelperService);
  });

  it('should ...', inject([AuthService], (guard: AuthService) => {
    expect(guard).toBeTruthy();
  }));
});

