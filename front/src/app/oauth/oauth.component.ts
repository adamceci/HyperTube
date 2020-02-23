import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Router } from '@angular/router';

// import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
// import { User } from '../shared/user.model';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {
  // currentUser: User;
  // user: SocialUser;
  // private loggedIn: boolean;

  // constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //   });
  // }

  // signInWith42(): void {
  //   // tslint:disable-next-line: max-line-length
  //   document.location.href = 'https://api.intra.42.fr/oauth/authorize?client_id=211f8c62b9a56ea736ea1024cd5c7577f35dd88aab8e4584475247133aeb7c2e&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsignin&response_type=code';
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  auth2: any;
  @ViewChild('googleRef', { static: true }) googleLogin: ElementRef;

  constructor() { }

  ngOnInit() {
    this.googleSDK();
  }

  prepareLoginButton() {
    this.auth2.attachClickHandler(this.googleLogin.nativeElement, {}, (googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      //YOUR CODE HERE
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
    });
  }

  googleSDK() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '131348951269-vk2kajdrnmlv192renn05ivs188e12k3.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  signInWith42(): void {
    // tslint:disable-next-line: max-line-length
    document.location.href = 'https://api.intra.42.fr/oauth/authorize?client_id=211f8c62b9a56ea736ea1024cd5c7577f35dd88aab8e4584475247133aeb7c2e&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsignin&response_type=code';
  }
}
