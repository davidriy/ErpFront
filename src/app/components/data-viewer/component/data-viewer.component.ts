import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../resource/employee.model";
import {HttpErrorResponse} from "@angular/common/http";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css'],
  providers: [MessageService]
})
export class DataViewerComponent implements OnInit {

  tableData: Employee[] = [];
  totalRecords = 0;
  cols: any[] = [];
  tableSelection: Employee = new Employee('', '','',0,'');
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initCols();
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(
        (data) => {
          // @ts-ignore
          this.tableData = data;
          this.totalRecords = this.tableData.length;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
  initCols(){
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
  onRowSelect(event: any) {
    this.messageService.add({severity:'info', summary:'Employee Selected', detail: event.data.name});
  }

  onRowUnselect(event: any) {
    this.messageService.add({severity:'info', summary:'Employee Unselected',  detail: event.data.name});
  }
}
