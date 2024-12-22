import {Component, computed} from '@angular/core';
import {CurrentUserService} from "../services/current-user.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  private user = computed(() => this.currentUser.instant());
  username = computed(() => `${this.user()?.firstname} ${this.user()?.lastname}`);
  constructor(private currentUser: CurrentUserService) {
  }
}
