import {Component, OnInit} from '@angular/core';
import {IDepartmentInfo} from "../../models/departmentInfo";
import {IEmployeeInfo} from "../../models/employeeInfo";
import {IDepartment} from "../../models/department";
import {departments as data} from "../../data/departments";
import {UsersService} from "../../services/users.service";
import $ from "jquery";
import {LegendDepartmentItemComponent} from "../../components/legend-department-item/legend-department-item.component";

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
  isEmployeeInfoOpened = false

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {

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

  goToEmployeeById(employeeId: string) {
    this.userService.goToEmployeeById(employeeId).subscribe((employee: IEmployeeInfo) => {
      this.employee = employee
      this.isEmployeeInfoOpened = true
    })
  }

  openLegend() {
    $('#legend').toggleClass('active');
    $('#btn-icon').toggleClass('active');
  }

  /*closeDepartmentInfo() {
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
  }*/

}
