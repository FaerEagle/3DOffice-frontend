import {IDepartment} from "../models/department";
import {employees} from "./employees";
import {projects} from "./projects";

export const departments: IDepartment[] = [
  {
    "id": 1,
    "name": "Отдел разработки",
    "color": "#FF8080",
    "commonInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
    "head": "Иванов Иван Иванович",
    "members": [
      {
        "id": 1,
        "firstName": "Богдан",
        "lastName": "Богданов",
        "secondName": "Богданович",
        "commonInfo": {
          "skillGrade": "junior",
          "description": "cool man"
        },
        "projectMembership": [1,2,3],
        "skills": ["html", "css", "javascript"],
        "employment": {
          "project": 73,
          "actual": 28,
          "planned": 43
        }
      },
      {
        "id": 4,
        "firstName": "Иван",
        "lastName": "Иванов",
        "secondName": "Иванович",
        "commonInfo": {
          "skillGrade": "middle",
          "description": "cool man"
        },
        "projectMembership": [2],
        "skills": ["C#", ".NET", "visual studio"],
        "employment": {
          "project": 73,
          "actual": 28,
          "planned": 43
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "Отдел тестирования",
    "color": "#FCFF73",
    "commonInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
    "head": "Петров Петр Петрович",
    "members": [
      {
        "id": 2,
        "firstName": "Николай",
        "lastName": "Николаев",
        "secondName": "Николаенко",
        "commonInfo": {
          "skillGrade": "middle",
          "description": "cool man too"
        },
        "projectMembership": [1,3],
        "skills": ["postman", "mantis", "katalon"],
        "employment": {
          "project": 34,
          "actual": 10,
          "planned": 24
        }
      },
      {
        "id": 5,
        "firstName": "Петр",
        "lastName": "Петров",
        "secondName": "Петрович",
        "commonInfo": {
          "skillGrade": "senior",
          "description": "cool man too"
        },
        "projectMembership": [2],
        "skills": ["php", "java", "phpstorm"],
        "employment": {
          "project": 34,
          "actual": 10,
          "planned": 24
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "Отдел аналитики",
    "color": "#A792FF",
    "commonInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
    "head": "Матвеев Матвей Матвеевич",
    "members": [
      {
        "id": 3,
        "firstName": "Максим",
        "lastName": "Максимов",
        "secondName": "Максименко",
        "commonInfo": {
          "skillGrade": "junior",
          "description": "cool man too"
        },
        "projectMembership": [1,2],
        "skills": ["C#", ".net", "visual studio"],
        "employment": {
          "project": 13,
          "actual": 9,
          "planned": 48
        }
      },
      {
        "id": 6,
        "firstName": "Андрей",
        "lastName": "Андреянов",
        "secondName": "Андреевич",
        "commonInfo": {
          "skillGrade": "senior",
          "description": "cool man too"
        },
        "projectMembership": [2,1,3],
        "skills": ["C#", ".net", "visual studio"],
        "employment": {
          "project": 13,
          "actual": 9,
          "planned": 48
        }
      },
      {
        "id": 7,
        "firstName": "Матвей",
        "lastName": "Матвеев",
        "secondName": "Матвеевич",
        "commonInfo": {
          "skillGrade": "middle",
          "description": "cool man too"
        },
        "projectMembership": [1,2,3,4],
        "skills": ["C#", ".net", "visual studio"],
        "employment": {
          "project": 13,
          "actual": 9,
          "planned": 48
        }
      }
    ]
  }
]
