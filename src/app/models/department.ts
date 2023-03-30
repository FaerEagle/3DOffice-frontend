import {IEmployee} from "./employee";

export interface IDepartment {
  id: number
  name: string
  color: string
  commonInfo: string
  head: string
  members: IEmployee[]
}
