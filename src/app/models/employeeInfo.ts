import {IProjectInfo} from "./projectsInfo";

export interface IEmployeeInfo {
  "id": number
  "firstName": string
  "middleName": string
  "lastName": string
  "info": string
  "post": string
  "skills": string
  "isDepartamentHead": boolean
  "projects": [
    {
      "project": IProjectInfo,
      "actualEmployment": number,
      "plannedEmployment": number
    }
  ]
}
