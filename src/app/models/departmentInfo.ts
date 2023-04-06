import {IProjectInfo} from "./projectsInfo";

export interface IDepartmentInfo {
  "id": number
  "nameDepartament": string
  "infoDepartament": string
  "colorDepartament": string
  "projects": IProjectInfo[]
}

