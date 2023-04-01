import {IEmployeeInfo} from "./employeeInfo";

export interface IProjectInfo {
  "id": number
  "nameProject": string
  "infoProject": string
  "employees": [{
    "employee": IEmployeeInfo
  }]
}
