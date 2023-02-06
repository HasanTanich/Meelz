import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) {
  }

  form: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [null, Validators.required],
      phoneNumber: [null],
    });
  }
  validateForm() {
    if (this.form.invalid) {
      this.form.get('name').markAsTouched();
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
      this.form.get('phoneNumber').markAsTouched();
      return;
    }
    else {
      this.register();
    }
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
    return "Password must contain 8 characters,1 capital letter and 1 number ";
  }
  register() {
    this.authService.register(this.form.value.email, this.form.value.password, this.form.value.name, this.router);
  }
  signUpWithGoogle(){
    this.authService.signUpWithGoogle();
  }
  signUpWithFacebook(){
    this.authService.signUpWithFacebook();
  }
  signUpWithLinkedin() {
    this.authService.signUpWithLinkedin();
  }
  signUpWithTwitter() {
    this.authService.signUpWithTwitter();
  }
  openLogInDialog() {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent, {
      width: '446px',
      height: '572px',
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
