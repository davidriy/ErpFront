import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/services/resources/user.model";
import {UserService} from "../../../shared/services/user.service";
import {finalize} from "rxjs/operators";
import {EmployeeService} from "../../../shared/services/employee.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  alertKey = 'app-login';
  showLoginWindow = true;
  showRegisterWindow = false;
  showMainWindow = false;
  password = '';
  user = '';
  logged = false;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  show(window: string){
    this.showMainWindow = false;
    this.showLoginWindow = false;
    this.showRegisterWindow = false;
    switch (window){
      case 'main':
        this.showMainWindow = true;
        break;
      case 'login':
        this.showLoginWindow = true;
        break;
      case 'register':
        this.showRegisterWindow = true;
        break;
    }

  }
  registerUser() {
    this.userService.addUser(new User(this.user, this.password))
      .subscribe(
        (data) => {
          console.log(data);
          if (data){
            // create alert
            this.messageService.add({
              key: this.alertKey,
              severity: 'success',
              summary: 'Registered successfully'
            });
            this.show('login');
          } else {
            // create alert
            this.messageService.add({
              key: this.alertKey,
              severity: 'error',
              summary: 'Register failed',
              detail: 'There was an error with the request'
            });
          }
        }
      );
  }
  login(){
    this.userService.login(new User(this.user, this.password))
      .pipe(
        finalize(() =>{
          if(this.logged){
            this.show('main');
            this.messageService.add({
              key: this.alertKey,
              severity: 'success',
              summary: 'Login successful'
            });
          } else{
            this.messageService.add({
              key: this.alertKey,
              severity: 'error',
              summary: 'Login failed',
              detail: 'Please check your details'
            });
          }
        })
      )
      .subscribe(
        (data) => {
          this.logged = data;
        }
      );
    // this.user = '';
    // this.password = '';
  }
  onLogout(){
    this.user = '';
    this.password = '';
    this.messageService.add({
      key: this.alertKey,
      severity: 'success',
      summary: 'Logout',
      detail: 'You logged out successfully'
    });
    this.show('login');
  }
}
