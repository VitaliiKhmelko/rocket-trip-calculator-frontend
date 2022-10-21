import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-trip-container',
  templateUrl: './create-trip-container.component.html',
  styleUrls: ['./create-trip-container.component.scss']
})
export class CreateTripContainerComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.User?.tripUuid) {
      this.router.navigate([''])
    }
  }

}
