import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Trip } from 'src/app/models/trip';
import { createTripComponentCreateButtonClicked } from 'src/app/redux/actions/create-trip-component.actions.ts.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-trip-container',
  templateUrl: './create-trip-container.component.html',
  styleUrls: ['./create-trip-container.component.scss']
})
export class CreateTripContainerComponent implements OnInit {
  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('')
  })

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    if (this.userService.User?.tripId) {
      this.router.navigate([''])
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const trip: Trip = this.form.value as Trip;

      trip.participators = [{
        name: 'Vitalii Khmelko',
        expenses: []
      }]

      this.store.dispatch(createTripComponentCreateButtonClicked({ trip }))
    }
  }

}
