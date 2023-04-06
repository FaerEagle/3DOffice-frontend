export interface IEmployeeInfo {
  "id": number
  "firstName": string
  "middleName": string
  "lastName": string
  "post": string
  "workload": number
  "workloadId": {
    "degreeWorkLoad": string
  }
  "skills": string
  "isDepartamentHead": boolean
  "projects": [
    {
      "project": {
        "nameProject": string,
        "infoProject": string
      },
      "actualEmployment": number,
      "plannedEmployment": number
    }
  ]
}
