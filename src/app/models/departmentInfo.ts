import {IEmployeeInfo} from "./employeeInfo";

export interface IDepartmentInfo {
  "id": number
  "nameDepartament": string
  "infoDepartament": string
  "colorDepartamemnt": string
  "employees": IEmployeeInfo[]
}

