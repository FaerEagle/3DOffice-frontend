import { Component } from '@angular/core';
import {LegendDepartmentItemsService} from "../../services/legend-department-items.service";

@Component({
  selector: 'app-map-employee-info',
  templateUrl: './map-employee-info.component.html',
  styleUrls: ['./map-employee-info.component.scss']
})
export class MapEmployeeInfoComponent {

  constructor(public mapEmployeeInfoService: LegendDepartmentItemsService) {
  }

  info = false

}
