import {Component, Input} from '@angular/core';
import {LegendDepartmentItemsService} from "../../services/legend-department-items.service";
import {IEmployeeInfo} from "../../models/employeeInfo";

@Component({
  selector: 'app-map-employee-info',
  templateUrl: './map-employee-info.component.html',
  styleUrls: ['./map-employee-info.component.scss']
})
export class MapEmployeeInfoComponent {
  @Input() employee: IEmployeeInfo

  constructor(public mapEmployeeInfoService: LegendDepartmentItemsService) {
  }

  info = false

}
