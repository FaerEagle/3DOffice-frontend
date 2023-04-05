import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IUser} from "../models/user";
import {IDepartmentInfo} from "../models/departmentInfo";
import {IEmployeeInfo} from "../models/employeeInfo";
import {departments} from "../data/departments";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>('https://localhost:7223/api/User/2')
  }

  getDepartment(): Observable<IDepartmentInfo> {
    return this.http.get<IDepartmentInfo>('https://localhost:7223/api/Departament/GetDepartamentInfo/1')
  }

  getDepartmentHead(departmentId: number): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>('https://localhost:7223/api/Departament/GetDepartamentHead/' + departmentId)
  }

  getEmployee(): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>('https://localhost:7223/api/Employee/GetEmployeeInfo/1')
  }
}
