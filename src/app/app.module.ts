import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { httpInterceptProviders } from './interceptors';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireFunctionsModule,REGION } from '@angular/fire/functions';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    identityPoolRegion: 'us-east-1',
    userPoolId: 'us-east-1_DisA6ajGf',
    userPoolWebClientId: '4o6neking2l7vk5ha8q4lqco1u',
    mandatorySignIn: false,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    oauth: {
      domain: 'meelzv2.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'profile', 'openid'],
      redirectSignIn:  environment.apiURL,
      redirectSignOut:  environment.apiURL,
      responseType: 'code' // or 'token'
    }
  }
});
const currentConfig = Auth.configure();
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [httpInterceptProviders,{provide:REGION,useValue:'us-central1'}],
  bootstrap: [AppComponent]
})
export class AppModule { }


