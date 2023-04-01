import {IProjectInfo} from "./projectsInfo";

export interface IDepartmentInfo {
  "id": number
  "nameDepartament": string
  "infoDepartament": string
  "projects": IProjectInfo[]
}

