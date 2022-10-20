import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginButtonClicked } from 'src/app/redux/actions/login.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(loginButtonClicked({ name: this.form.value.name! }))
    }
  }

}
