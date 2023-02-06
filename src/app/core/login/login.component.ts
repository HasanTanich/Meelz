import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) { }

  form: FormGroup;
  hide: boolean = true;
  remember: boolean = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  validateForm() {
    if (this.form.invalid) {
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
    }
    else {
      this.loginWithCognito();
    }
  }
  myFunction(el) {
    this.remember = el.checked;
  }
  emailErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return '* Email field is required';
    }
    return this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  passwordErrorMessage() {
    if (this.form.get('password').hasError('required')) {
      return '* Password field is required';
    }
    return "Password must contain 8 characters,1 capital letter and 1 number";
  }
  loginWithCognito() {
    this.authService.loginWithCognito(this.form.value.email, this.form.value.password, this.router, this.remember);
  }
  openRegisterDialog() {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent, {
      width: '446px',
      height: '746px',
    });
  }
  openForgotDialog() {
    this.dialog.closeAll();
    this.dialog.open(ResetPasswordComponent, {
      width: '446px',
      height: '403px',
    });
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }
  signInWithLinkedin() {
    this.authService.signInWithLinkedin();
  }
  signInWithTwitter() {
    this.authService.signInWithTwitter();
  }

}
