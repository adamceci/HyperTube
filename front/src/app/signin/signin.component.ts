import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  // constructor(private authService: AuthService) { }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // console.log(this.authService);
  }

  log(username: string) {
    console.log(username);
  }
}
