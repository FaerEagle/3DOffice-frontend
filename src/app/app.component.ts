import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import $ from 'jquery';
import {IUser} from "./models/user";
import {UsersService} from "./services/users.service";
import {Observable, tap} from "rxjs";
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
import {IDepartment} from "./models/department";
import {departments, departments as data} from "./data/departments";
import {IDepartmentInfo} from "./models/departmentInfo";
import {IEmployeeInfo} from "./models/employeeInfo";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";
import {routes} from "./app-routing.module";
import {ChangePasswordService} from "./services/change-password.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isLoggedIn(): boolean {
    return this.as.isAuth()
  }

  constructor(private as: LoginService, private router: Router, private changePasswordService: ChangePasswordService) {
  }

  login(nameUser: string, email: string, password: string) {
    this.as.loginN(nameUser, email, password)
      .subscribe(res => {
        this.router.navigate([''])
      }, error => {
        alert('Неправильно введены данные')
      })
  }

  logout() {
    this.as.logout()
  }

  changePassword(password: string, confirmPassword: string) {
    this.changePasswordService.changePassword(password, confirmPassword)
      .subscribe(res => {
        alert("Пароль успешно изменен");
        this.router.navigate(['login']);
      }, error => {
        alert("Пароли не совпадают");
      })
  }

  sendOnEmail() {
    this.as.sendOnEmail().subscribe(res => {
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
    }, error => {
      alert("На указанную почту нет зарегистрированной учетной записи");
    });
  }
}
