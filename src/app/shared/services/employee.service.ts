import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../components/data-viewer/resource/employee.model";
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "../../../environments/environment";

export class EmployeeRq {
  employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${environment.apiBaseUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${environment.apiBaseUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${environment.apiBaseUrl}/employee/update`, employee);
  }

  public deleteEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${environment.apiBaseUrl}/employee/delete`, employee);
  }
}
