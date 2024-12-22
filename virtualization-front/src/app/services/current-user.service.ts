import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserModel} from "../models/user-model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() {
    let user = localStorage.getItem('user');
    if (user) {
      this.update(JSON.parse(user) as UserModel);
    } else {
      this.update(null);
    }
  }
  private currentUser: WritableSignal<UserModel | null> = signal(null);

  update(user: UserModel | null){
    this.currentUser.set(user);
    console.log(user)
    if(user){
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user')
    }
  }

  signOut() {
    this.update(null);
  }

  instant: Signal<UserModel | null> = this.currentUser.asReadonly()
}
