import { Injectable } from '@angular/core';
import { User } from '../models/user';

/**
 * Interface to set and get current user
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly key = 'user';

  constructor() { }

  set User(user: User | undefined) {
    window.sessionStorage.setItem(this.key, JSON.stringify(user));
  }

  get User(): User | undefined {
    const user = window.sessionStorage.getItem(this.key);

    if (user) {
      return JSON.parse(user)
    }

    return undefined;
  }
}
