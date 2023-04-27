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

  onSubmit() {
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value)
        .subscribe(
          {
            next: (response: any) => {
              localStorage.setItem('token', response.access_token);
              console.log(localStorage.getItem('token'));
              this.router.navigateByUrl('');
            },
            error: (response: any) => {
              if (response.status === 401) alert("Данные введены неверно");
            }
          }
        );
    }
  }

  /*onSubmitN() {
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value)
        .subscribe(
          {
            next: (response: any) => {
              localStorage.setItem('token', response.access_token);
              console.log(localStorage.getItem('token'));
              this.router.navigateByUrl('');
            },
            error: (response: any) => {
              if (response.status === 401) alert("Данные введены неверно");
            }
          }
        );
    }
  }*/

  logIn() {

    $('#popup-container').css('display', 'none');
    $('#quit-btn').css('visibility', 'visible');
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

  sendOnEmail() {
    let backBtn = document.getElementById('back-btn') as HTMLElement;
    let recoveryTitle = document.getElementById('recovery-title') as HTMLElement;
    let emailInput = document.getElementById('recover-email-input') as HTMLElement;
    let sendOnEmailBtn = document.getElementById('send-on-email-btn') as HTMLElement;
    backBtn.style.display = 'none';
    recoveryTitle.innerText = 'На указанный адрес электронной почты была отправлена ссылка для сброса пароля';
    recoveryTitle.style.maxWidth = '700px';
    recoveryTitle.style.padding = '80px 50px'
    emailInput.style.display = 'none';
    sendOnEmailBtn.style.display = 'none';
  }
}
