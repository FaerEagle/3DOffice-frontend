import {Component, Input} from '@angular/core';
import {IDepartment} from "../../models/department";
import {LegendDepartmentItemsService} from "../../services/legend-department-items.service";

@Component({
  selector: 'app-legend-department-item',
  templateUrl: './legend-department-item.component.html',
  styleUrls: ['./legend-department-item.component.scss']
})
export class LegendDepartmentItemComponent {

  @Input() department: IDepartment

  info = false

  constructor(public legendDepartmentItemsService: LegendDepartmentItemsService) {
  }
}
