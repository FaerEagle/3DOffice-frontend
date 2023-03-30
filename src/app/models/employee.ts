export interface IEmployee {
  id: number
  firstName: string
  lastName: string
  secondName: string
  commonInfo: {
    skillGrade: string
    description: string
  }
  projectMembership: number[]
  skills: string[]
  employment: {
    project: number
    actual: number
    planned: number
  }
}
