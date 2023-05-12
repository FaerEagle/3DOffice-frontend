import {Component, Input} from '@angular/core';
import {IEmployeeInfo} from "../../models/employeeInfo";
import {LegendDepartmentItemComponent} from "../legend-department-item/legend-department-item.component";
import {MainPageComponent} from "../../pages/main-page/main-page.component";

@Component({
  selector: 'app-map-employee-info',
  templateUrl: './map-employee-info.component.html',
  styleUrls: ['./map-employee-info.component.scss']
})
export class MapEmployeeInfoComponent {
  @Input() employee: IEmployeeInfo

  constructor(public mainPageComponent: MainPageComponent) {
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
