import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { NewPasswordComponent } from './new-password/new-password.component';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }


  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  emailErrorMessage() {
    if (this.email.hasError('required')) {
      return '* Email field is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  validateForm() {
    if (this.email.invalid) {
      this.email.markAsTouched();
    }
    else {
      this.sendResetLink();
    }
  }
  openLoginDialog() {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent, {
      width: '446px',
      height: '572px',
    });
  }
  sendResetLink() {
    this.authService.resetPass(this.email.value);
    this.dialog.closeAll();

    this.dialog.open(NewPasswordComponent, {
      width: '440px',
      height: '540px',

    });
  }
}
