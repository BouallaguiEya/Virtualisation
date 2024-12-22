import {Component} from '@angular/core';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {CurrentUserService} from "../services/current-user.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgbDropdownModule,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private currentUSerService: CurrentUserService) {
  }
  signOut() {
    this.currentUSerService.signOut();
  }
}
