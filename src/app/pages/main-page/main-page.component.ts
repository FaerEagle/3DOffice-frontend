import {Component, OnInit} from '@angular/core';
import {IDepartmentInfo} from "../../models/departmentInfo";
import {IEmployeeInfo} from "../../models/employeeInfo";
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
  isEmployeeInfoOpened = false
  isEditWindowOpened = false

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {

    this.userService.getAllDepartments().subscribe((departmentsInfo: IDepartmentInfo[]) => {
      this.departmentInfo = departmentsInfo
    })


    this.userService.getEmployee().subscribe((employee: IEmployeeInfo) => {
      this.employee = employee
    })
  }

  goToEmployeeById(employeeId: string) {
    this.userService.goToEmployeeById(employeeId).subscribe((employee: IEmployeeInfo) => {
      this.employee = employee
      this.isEmployeeInfoOpened = true
    })
  }

  changeEmployment(employeeId: string, projectId: string, plannedEmployment: string) {
    this.userService.changeEmployment(employeeId, projectId, plannedEmployment).subscribe(res => {
      alert('Данные успешно изменены');
    }, error => {
      alert('Что-то пошло не так');
    })
  }

  openLegend() {
    $('#legend').toggleClass('active');
    $('#btn-icon').toggleClass('active');
  }
}
