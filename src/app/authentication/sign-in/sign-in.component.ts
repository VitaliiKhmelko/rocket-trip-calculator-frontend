import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginButtonClicked } from 'src/app/redux/actions/login.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private store: Store, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.User) {
      this.router.navigate(['']);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(loginButtonClicked({ name: this.form.value.name! }))
    }
  }

}
