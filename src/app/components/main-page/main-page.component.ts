import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../data-viewer/resource/employee.model";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }

  employeesVisible = false;
  mainVisible = true;
  contactVisible = false;
  suggestionVisible = false;
  locationVisible = false;
  ngOnInit(): void {
    console.log('usuario' + this.username);
  }

  @Input() username = 'Usuario';
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();


  callLogout(){
    this.logout.emit(true);
  }
  showWindow(window: string){
    this.employeesVisible = false;
    this.mainVisible = false;
    this.suggestionVisible = false;
    this.locationVisible = false;
    this.contactVisible = false;
    switch (window) {
      case 'employees':
        this.employeesVisible = true;
        break;
      case 'main':
        this.mainVisible = true;
        break;
      case 'suggestion':
        this.suggestionVisible = true;
        break;
      case 'location':
        this.locationVisible = true;
        break;
      case 'contact':
        this.contactVisible = true;
        break;
    }

  }



}
