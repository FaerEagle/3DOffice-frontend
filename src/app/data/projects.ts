import {IProject} from "../models/project";
import {employees} from "./employees";

export const projects: IProject[] = [
  {
    "id": 1,
    "name": "Crowd-Testing",
    "members": [employees[1].id]
  },
  {
    "id": 2,
    "name": "Pet-проект на GitHub",
    "members": [employees[2].id]
  },
  {
    "id": 3,
    "name": "CSS-training web-platform",
    "members": [employees[3].id]
  }
]
