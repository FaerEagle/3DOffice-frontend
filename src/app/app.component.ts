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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  departmentInfo: IDepartmentInfo[]
  departmentHead: IEmployeeInfo
  employee: IEmployeeInfo
  departments: IDepartment[] = data
  user$: Observable<IUser>
  user: IUser


  /*loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    /!*this.productsService.getAll().subscribe((products => {
      this.products = products
      this.loading = false
    }))*!/
  }*/


  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    // this.user$ = this.userService.getUser()
    /*this.userService.getUser().subscribe((user: IUser) => {
      this.user = user
    })*/

    this.userService.getAllDepartments().subscribe((departmentsInfo: IDepartmentInfo[]) => {
      this.departmentInfo = departmentsInfo
      /*this.userService.getDepartmentHead(departmentsInfo.id).subscribe((departmentHead: IEmployeeInfo) => {
        this.departmentHead = departmentHead
      })*/
    })


    this.userService.getEmployee().subscribe((employee: IEmployeeInfo) => {
      this.employee = employee
      /*let actualEmployment: number[] = []
      console.log(employee)
      for (let i = 0; i++; i < employee.projects.length) {
        // @ts-reduce
        actualEmployment.push(employee.projects[i].actualEmployment)
      }
      console.log(actualEmployment)
      console.log(actualEmployment.reduce((accumulator, currentValue) => accumulator + currentValue));*/
    })
  }

  logIn() {
      $('#popup-container').css('display', 'none');
      $('#quit-btn').css('visibility', 'visible');
  }

  logOut() {
    let window = document.getElementById('popup-container') as HTMLElement;
    let headerButton = document.getElementById('quit-btn') as HTMLElement;
    window.style.display = 'flex';
    headerButton.style.visibility = 'hidden';
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

  closeDepartmentInfo() {
    $('.department-info-popup').removeClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0)');
    setTimeout(() => {
      $('.department-info-container').removeClass('active');
    },1000);
  }

  closePersonInfo() {
    $('.employee-info-popup').removeClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0)');
    setTimeout(() => {
      $('.department-info-container').removeClass('active');
    },1000);
  }

  openLegend() {
    $('#legend').toggleClass('active');
    $('#btn-icon').toggleClass('active');
  }

  openDepartmentInfo() {
    let background = $('.department-info-container');
    $('.department-info-popup').addClass('active');
    background.css('background-color', 'rgba(0, 0, 0, 0.6)');
    background.addClass('active');
  }

  openPersonInfo() {
    let background = $('.department-info-container');
    $('.employee-info-popup').addClass('active');
    background.css('background-color', 'rgba(0, 0, 0, 0.6)');
    background.addClass('active');
  }
}
