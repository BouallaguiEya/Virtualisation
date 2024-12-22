import {Component} from '@angular/core';
import {CurrentUserService} from "../services/current-user.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  form = new FormGroup<{
    login: FormControl<string | null>,
    pwd: FormControl<string | null>
  }>({
    login: new FormControl<string | null>('', {validators: [Validators.required]}),
    pwd: new FormControl<string | null>('', {validators: [Validators.required]})
  });

  constructor(private loginService: LoginService, private currentUser: CurrentUserService, private router: Router) {
  }

  signIn() {
    this.loginService.login(this.form.getRawValue()).subscribe(user => {
      this.currentUser.update(user);
      this.router.navigate(['/welcome']);
    })

  }
}
