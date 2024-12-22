import {Component, computed, inject, signal, Signal, WritableSignal} from '@angular/core';
import {UserModel} from "../models/user-model";
import {toSignal} from "@angular/core/rxjs-interop";
import {UserService} from "../services/user.service";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {sign} from "node:crypto";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [BrowserModule, NgbModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userService = inject(UserService);
  users: WritableSignal<UserModel[]> = signal([]);

  constructor() {
    this.userService.findAll().subscribe(users => this.users.set(users))
  }

  delete(user: UserModel) {
    this.userService.delete(user.id!).subscribe(users => this.users.set(users))
  }
}
