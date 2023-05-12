import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IDepartmentInfo} from "../models/departmentInfo";
import {IEmployeeInfo} from "../models/employeeInfo";
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

  getDepartment(): Observable<IDepartmentInfo> {
    return this.http.get<IDepartmentInfo>('https://localhost:7223/api/Departament/GetDepartamentInfo/1')
  }

  getAllDepartments(): Observable<IDepartmentInfo[]> {
    return this.http.get<IDepartmentInfo[]>(`https://localhost:7223/api/Departament/GetAllDepartamentInfo`)
  }

  getDepartmentHead(departmentId: number): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>('https://localhost:7223/api/Departament/GetDepartamentHead/' + departmentId)
  }

  getEmployee(): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>(`https://localhost:7223/api/Employee/GetEmployeeInfo/1`)
  }

  goToEmployeeById(employeeId: string): Observable<IEmployeeInfo> {
    return this.http.get<IEmployeeInfo>('https://localhost:7223/api/Employee/GetEmployeeInfo/' + employeeId);
  }
}
