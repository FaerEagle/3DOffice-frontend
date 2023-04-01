import {Component, Input} from '@angular/core';
import {IDepartment} from "../../models/department";
import {LegendDepartmentItemsService} from "../../services/legend-department-items.service";
import {IDepartmentInfo} from "../../models/departmentInfo";
import {IEmployeeInfo} from "../../models/employeeInfo";

@Component({
  selector: 'app-legend-department-item',
  templateUrl: './legend-department-item.component.html',
  styleUrls: ['./legend-department-item.component.scss']
})
export class LegendDepartmentItemComponent {

  @Input() department: IDepartmentInfo
  @Input() departmentHead: IEmployeeInfo

  info = false

  constructor(public legendDepartmentItemsService: LegendDepartmentItemsService) {
  }
}
