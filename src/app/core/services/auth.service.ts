import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LoginComponent } from '../login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { environment } from 'src/environments/environment';
import { InfoAlertComponent } from 'src/app/shared/info-alert/info-alert.component';

let RememberMe: boolean = false;
let OAuth=false;


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  checkTime: boolean = false;
  constructor(public dialog: MatDialog, public jwtHelper: JwtHelperService) { }

  public getOauth()
  {
    return OAuth;
  }
  public setOauthFalse(){
    console.log("setting oAuth iz servisa");

    OAuth=false;
  }
  public isLoggedIn() {

    var user = localStorage.getItem('CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u.LastAuthUser');
    var token = localStorage.getItem('CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u.' + user + '.accessToken');
    if(OAuth)
      window.location.reload();
    return !this.jwtHelper.isTokenExpired(token);
  }
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  public getAuthTime() {
    if (RememberMe === false) {
      if (this.isLoggedIn()) {
        console.log("USER LOGOVAN, LETI napolje");
        Auth.signOut();
        window.location.reload();
      }
    }
  }
  setCheckTime() {
    this.checkTime = true;
  }
  getCheckTime() {
    return this.checkTime;
  }
  CheckToken() {
    setInterval(this.getAuthTime.bind(this), 3700000);
  }
  async loginWithCognito(email: string, password: string, router: Router, remember: boolean) {
    try {


      const user = await Auth.signIn(email.toString(), password.toString());
      const tokens = user.signInUserSession;

      if (tokens != null) {

        router.navigate(['home']);
        this.dialog.closeAll();
        this.dialog.open(InfoAlertComponent, {
          width: '30%', data: "You are logged in successfully !"
        });
        setTimeout(function(){ window.location.reload(); }, 2000);
        

        if (remember) {
          RememberMe = remember;
          console.log("REMEMBER ME");
        }
      }
    }
    catch (error) {
      console.log(error);
      this.dialog.open(InfoAlertComponent, {
        width: '30%', data: "User Authentication failed ! Check Password and Username"
      });
    }
  }
  register(email: string, password: string, name: string, router: Router) {
    try {
      const user = Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
        },
      }).then(() => {
        this.dialog.closeAll();
        this.dialog.open(LoginComponent);
        this.dialog.open(InfoAlertComponent, {
          width: '30%', data: " User successfuly registered, please check your email inbox :)"
        });
        // alert('user successfuly registered, please check your email to verify your email before you sign in');
      })
        .catch((err) => {
          console.log('error signing up:', err.message);
          alert(err.message);
        });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  resetPass(email: string) {
    Auth.forgotPassword(email)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  enterNewPass(email: string, code: string, new_password: string) {
    Auth.forgotPasswordSubmit(email, code, new_password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  signUpWithGoogle() {
    OAuth=true;
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    });
  }
  signUpWithFacebook() {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook
    })
  }
  signUpWithLinkedin() {
    let LinkedinUrl = 'https://meelzv2.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=LinkedIn&client_id=4o6neking2l7vk5ha8q4lqco1u&redirect_uri=http://localhost:4200/home&scope=openid+profile+email';    
    window.open(LinkedinUrl, '_blank');
  }
  signUpWithTwitter() {
    let TwitterUrl = 'https://meelzv2.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=Twitter&client_id=4o6neking2l7vk5ha8q4lqco1u&redirect_uri=http://localhost:4200/home&scope=openid+profile+email';
    window.open(TwitterUrl, '_blank');
  }
  signInWithGoogle() {
    OAuth=true;
    console.log("oauth u servicu"+ OAuth);
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    });

  }
  signInWithFacebook() {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook
    });
  }
  // signInWithLinkedin() {
  //   let LinkedinUrl = 'https://meelz.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=LinkedIn&client_id=31goilt5aaqpbo84acs1abfket&redirect_uri=http://localhost:4200/home&scope=email+openid+profile';
  //   window.open(LinkedinUrl, '_blank');
  // }
  // signInWithTwitter() {
  //   let TwitterUrl = 'https://meelz.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=Twitter&client_id=31goilt5aaqpbo84acs1abfket&redirect_uri=http://localhost:4200/home&scope=openid';
  //   window.open(TwitterUrl, '_blank');
  // }
  signInWithLinkedin() {
    let LinkedinUrl = 'https://meelz.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=LinkedIn&client_id=31goilt5aaqpbo84acs1abfket&redirect_uri='+environment.apiURL+'&scope=email+openid+profile';
    window.open(LinkedinUrl, '_blank');
  }
  signInWithTwitter() {
    console.log("sign in with twitter");
    let TwitterUrl = 'https://meelz.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&identity_provider=Twitter&client_id=31goilt5aaqpbo84acs1abfket&redirect_uri='+environment.apiURL+'&scope=openid';
    console.log(TwitterUrl);
    window.open(TwitterUrl, '_blank');
  }
}
