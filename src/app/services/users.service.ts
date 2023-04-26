import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IUser} from "../models/user";
import {IDepartmentInfo} from "../models/departmentInfo";
import {IEmployeeInfo} from "../models/employeeInfo";
import {departments} from "../data/departments";
import {OFFICE_API_URL} from "../app-injection-tokens";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(OFFICE_API_URL) private apiUrl: string
  ) {
  }

  token = localStorage.getItem('token');

  getUser(): Observable<IUser> {
    return this.http.get<IUser>('https://localhost:7223/api/User/2')
  }

  getDepartment(): Observable<IDepartmentInfo> {
    return this.http.get<IDepartmentInfo>('https://localhost:7223/api/Departament/GetDepartamentInfo/1')
  }

  getAllDepartments(): Observable<IDepartmentInfo[]> {
    return this.http.get<IDepartmentInfo[]>(`https://633b-2a00-1fa2-84b6-15c4-f4bb-1d15-581e-3373.ngrok.io/api/Departament/GetAllDepartamentInfo`)
  }

  getDepartmentHead(departmentId: number): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>('https://localhost:7223/api/Departament/GetDepartamentHead/' + departmentId)
  }

  getEmployee(): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>(`https://633b-2a00-1fa2-84b6-15c4-f4bb-1d15-581e-3373.ngrok.io/api/Employee/GetEmployeeInfo/1`)
  }
}
