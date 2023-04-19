import {Component, OnInit} from '@angular/core';
import {IDepartmentInfo} from "../../models/departmentInfo";
import {IEmployeeInfo} from "../../models/employeeInfo";
import {IDepartment} from "../../models/department";
import {departments as data} from "../../data/departments";
import {Observable} from "rxjs";
import {IUser} from "../../models/user";
import {UsersService} from "../../services/users.service";
import $ from "jquery";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

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
