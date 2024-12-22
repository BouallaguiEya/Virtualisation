import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";
import {UserCreateModel} from "../models/user-model";

interface SignUpForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
  email: FormControl<string | null>;
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  age: FormControl<number | null>;
  function: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  form: FormGroup<SignUpForm> = new FormGroup<SignUpForm>({
      login: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl(null),
      function: new FormControl('')
    }
  )

  constructor(private userService: UserService, private router: Router) {
  }

  signUp() {
    console.log(this.form.getRawValue() as UserCreateModel)
    this.userService.createUser(this.form.getRawValue() as UserCreateModel).subscribe(() => this.router.navigate(['/sign-in']));
  }
}
