import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {User} from "./resources/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/user/add', user);
  }
  public login(user: User): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8080/user/login', user);
  }

}
