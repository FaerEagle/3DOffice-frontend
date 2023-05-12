import { Component } from '@angular/core';
import $ from "jquery";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm = this.fb.group({
    nameUser: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor (private fb: FormBuilder, public loginService: LoginService, private router: Router, public appComponent: AppComponent) {
  }

  forgotPass() {
    let logInPopup = document.getElementById('log-in-popup') as HTMLElement;
    let forgotPassPopup = document.getElementById('recovery-popup') as HTMLElement;
    logInPopup.style.display = 'none';
    forgotPassPopup.style.display = 'inline';
  }

  backToLogIn() {
    let logInPopup = document.getElementById('log-in-popup') as HTMLElement;
    let forgotPassPopup = document.getElementById('recovery-popup') as HTMLElement;
    logInPopup.style.display = 'inline';
    forgotPassPopup.style.display = 'none';
  }
}
