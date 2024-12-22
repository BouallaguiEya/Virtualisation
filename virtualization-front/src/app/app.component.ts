import {Component, computed, effect, Signal} from '@angular/core';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CurrentUserService} from "./services/current-user.service";
import {Router, RouterOutlet} from "@angular/router";
import {UserModel} from "./models/user-model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbNavModule, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'virtualization';
  user: Signal<UserModel | null> = computed(() => this.currentUser.instant());
  constructor(private currentUser: CurrentUserService, private router: Router) {
    effect(() => {
        if (!this.user()) {
          this.router.navigate(['/sign-in'])
        }
      }
    )
  }
}
