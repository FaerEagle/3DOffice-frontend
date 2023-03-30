import {IEmployee} from "../models/employee";
import {projects} from "./projects";

export const employees: IEmployee[] = [
  {
    "id": 1,
    "firstName": "Богдан",
    "lastName": "Богданов",
    "secondName": "Богданович",
    "commonInfo": {
      "skillGrade": "junior",
      "description": "cool man"
    },
    "projectMembership": [projects[1].id],
    "skills": ["html", "css", "javascript"],
    "employment": {
      "project": 73,
      "actual": 28,
      "planned": 43
    }
  },
  {
    "id": 2,
    "firstName": "Николай",
    "lastName": "Николаев",
    "secondName": "Николаенко",
    "commonInfo": {
      "skillGrade": "middle",
      "description": "cool man too"
    },
    "projectMembership": [projects[2].id],
    "skills": ["php", "java", "phpstorm"],
    "employment": {
      "project": 34,
      "actual": 10,
      "planned": 24
    }
  },
  {
    "id": 3,
    "firstName": "Максим",
    "lastName": "Максимов",
    "secondName": "Максименко",
    "commonInfo": {
      "skillGrade": "senior",
      "description": "cool man too"
    },
    "projectMembership": [projects[3].id]
    ,
    "skills": ["C#", ".net", "visual studio"],
    "employment": {
      "project": 13,
      "actual": 9,
      "planned": 48
    }
  }
]
