import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UserCreateModel, UserModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {
  }

  createUser(user: UserCreateModel): Observable<UserModel> {
    console.log('this.apiUrl', this.apiUrl)
    return this.http.post<UserModel>(`${this.apiUrl}`, user)
  }

  findAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}`)
  }

  delete(id: number): Observable<UserModel[]> {
    return this.http.delete<UserModel[]>(`${this.apiUrl}/${id}`)
  }
}
