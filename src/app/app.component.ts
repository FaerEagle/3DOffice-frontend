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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isLoggedIn(): boolean {
    return this.as.isAuth()
  }

  constructor(private as: LoginService, private router: Router) {
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
}
