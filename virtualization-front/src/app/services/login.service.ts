import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel, UserCreateModel, UserModel} from "../models/user-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = '/api/users/login';

  constructor(private http: HttpClient) {
  }

  login(login: LoginModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}`, login)
  }
}
