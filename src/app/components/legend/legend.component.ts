import {Component, Input, OnInit} from '@angular/core';
import {LegendService} from "../../services/legend.service";
import {IDepartment} from "../../models/department";
import {LegendDepartmentItemsService} from "../../services/legend-department-items.service";

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit{

  @Input() department: IDepartment

  constructor(
    public legendService: LegendService,
    public legendDepartmentItemsService: LegendDepartmentItemsService
  ) {
  }

  ngOnInit(): void {
    console.log(this.department)
  }

}
