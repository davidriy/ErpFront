import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {Employee} from "../../data-viewer/resource/employee.model";
import {EmployeeService} from "../../../shared/services/data-viewer/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]
})
export class EmployeeComponent implements OnInit {
  alertKey = 'app-employee';
  mostrarEdicion = false;
  tableData: Employee[] = [];
  totalRecords = 0;
  cols: any[] = [];
  tableSelection: Employee = new Employee('', '', '', 0, '');
  isInsert = false;

  employeeForm: FormGroup = new FormGroup({});

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.initCols();
    this.getEmployees();
    this.initForm();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        (data) => {
          // @ts-ignore
          this.tableData = data.body as Employee[];
          this.totalRecords = this.tableData.length;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  initCols() {
    this.cols = [
      {
        field: 'name',
        header: 'Name',
        numeric: false
      },
      {
        field: 'last_name',
        header: 'Last name',
        numeric: false
      },
      {
        field: 'salary',
        header: 'Salary',
        numeric: true
      },
      {
        field: 'document',
        header: 'Document',
        numeric: false
      },
    ];
  }

  initForm(){
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      last_name: new FormControl(''),
      salary: new FormControl(''),
      document: new FormControl('')
      });
  }

  onRowSelect(event: any) {
    this.loadFormData(event.data);
    this.mostrarEdicion = true;
    this.isInsert = false;
  }

  onRowUnselect(event: any) {
    this.resetForm();
    this.mostrarEdicion = false;
  }
  addClicked(){
    this.mostrarEdicion = true;
    this.isInsert = true;
  }
  loadFormData(employee: Employee){
    this.employeeForm.controls.id.setValue(employee.id);
    this.employeeForm.controls.name.setValue(employee.name);
    this.employeeForm.controls.last_name.setValue(employee.last_name);
    this.employeeForm.controls.document.setValue(employee.document);
    this.employeeForm.controls.salary.setValue(employee.salary);
  }
  resetForm(){
    this.employeeForm.controls.id.setValue(null);
    this.employeeForm.controls.name.setValue(null);
    this.employeeForm.controls.last_name.setValue(null);
    this.employeeForm.controls.document.setValue(null);
    this.employeeForm.controls.salary.setValue(null);
  }
  getFormData(){
    return new Employee(
      this.employeeForm.controls.id.value,
      this.employeeForm.controls.name.value,
      this.employeeForm.controls.last_name.value,
      this.employeeForm.controls.document.value,
      this.employeeForm.controls.salary.value
    );
  }
  addEmployee(){
    this.employeeService
      .addEmployee(this.getFormData())
      .subscribe(
        (data) => {
          if(data){
            this.messageService.add({
              key: this.alertKey,
              severity: 'success',
              summary: 'There was an error while inserting a new employee.',
              detail: 'Insert error'
            });
          } else {
            this.messageService.add({
              key: this.alertKey,
              severity: 'error',
              summary: 'There was an error while inserting a new employee.',
              detail: 'Insert error'
            });
          }
        }
      );
  }
  updateEmployee(){

  }
  deleteEmploye(){

  }
}

