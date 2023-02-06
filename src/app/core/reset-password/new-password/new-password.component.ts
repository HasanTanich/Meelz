import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router,public dialog: MatDialog) { }
  newPass='';
  code='';
  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
  }
  OnSubmit()
  {
    this.authService.enterNewPass(this.email.value,this.code,this.newPass);
    this.dialog.closeAll();
    this.dialog.open(LoginComponent, {
      width: '446px',
      height: '572px',
    });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
