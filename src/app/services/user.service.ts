import { Inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { WINDOW } from '../shared/window-token';

/**
 * Interface to set and get current user
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly key = 'user';

  constructor(@Inject(WINDOW) private window: Window) { }

  set User(user: User | undefined) {
    this.window.sessionStorage.setItem(this.key, JSON.stringify(user));
  }

  get User(): User | undefined {
    const user = this.window.sessionStorage.getItem(this.key);

    if (user) {
      return JSON.parse(user)
    }

    return undefined;
  }
}
