import { Component, OnInit } from '@angular/core';
import {Employee} from "../data-viewer/resource/employee.model";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "../../shared/services/data-viewer/employee.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  employees: Employee[] = [];

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(
        (data) => {
          // @ts-ignore
          this.employees = data.body as Employee[];
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
