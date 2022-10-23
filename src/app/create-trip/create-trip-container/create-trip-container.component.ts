import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  participators = [new FormControl({ value: this.userService.User?.name, disabled: true }, [Validators.required])];

  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    participators: new FormArray(this.participators, [Validators.required, Validators.pattern(/^\w+$/)])
  })

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    if (this.userService.User?.tripId) {
      this.router.navigate([''])
    }
  }

  addParticipator() {
    this.participators.push(new FormControl('', [Validators.required]));
  }

  onSubmit(): void {
    if (this.form.valid) {
      const trip: Partial<Trip> = {
        name: this.form.value.name!,
        description: this.form.value.description!,
        participators: Object.fromEntries(this.participators.map((control) => {
          const name = control.value!;
          return [
            name, {
              name,
              expenses: [],
            }]
        }))
      };

      this.store.dispatch(createTripComponentCreateButtonClicked({ trip }))
    }
  }

}
