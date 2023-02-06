import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import { LoginComponent } from '../../core/login/login.component';
import { AuthService } from '../../core/services/auth.service';
import { SignUpComponent } from '../../core/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  [x: string]: any;
  routerLink;
   
  @Input() homeScreen: boolean;
  @Input() quantity:number;
  @Input() cartScreen=false;
  scroolDone=false;
  constructor(public dialog: MatDialog, private authService: AuthService,private cartService:TrendingMenuCartService,private route : Router) { 
  }
  condition = false;

  ngOnInit(): void {
    if (this.authService.getOauth() === true) {
      this.authService.setOauthFalse();
      window.location.reload();
    }
    setTimeout(() => {
      this.condition = this.authService.isLoggedIn();
    }, 1000);
    this.condition = this.authService.isLoggedIn();
    if(this.authService.isLoggedIn()==true)
      this.quantity=this.cartService.getAllLocalStorage();
    if(this.quantity==0)
      this.cartService.removeAllItemsFromLocalStorage();
      if(this.authService.isLoggedIn()==false)
        localStorage.clear();

  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '446px',
      height: '572px',
    });
  }

  openRegisterDialog() {
    this.dialog.open(SignUpComponent, {
      width: '446px',
      height: '746px',
    });
  }
  LogOut() {
    localStorage.clear();
    this.condition = this.authService.isLoggedIn();
    console.log("log OUT");
    this.route.navigate(['home']);
  }

  toggle: boolean = true;

  change() {
    this.toggle = !this.toggle;
    
  }
  @HostListener('window:scroll') onScroll(e: Event): void {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    // this.scroolDone=true;
    if(top>20 && this.cartScreen==false)  
      this.showFloatingCart=true;
    else this.showFloatingCart=false;
    if(top>20 && this.cartScreen==false)
      this.scroolDone=true;
  }

  
}
