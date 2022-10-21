import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { WINDOW } from '../shared/window-token';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockWindow: Window;

  const provideMockWindow = (): Provider => {
    return {
      provide: WINDOW,
      useValue: {
        sessionStorage: {
          setItem: jasmine.createSpy(),
          getItem: jasmine.createSpy(),
        }
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockWindow(),
      ]
    });
    service = TestBed.inject(UserService);
    mockWindow = TestBed.inject(WINDOW)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set user key in session storage', () => {
    service.User = { name: 'my user' }

    expect(mockWindow.sessionStorage.setItem).toHaveBeenCalled()
  });

  it('should return undefined if no user in session storage', () => {
    const user: User | undefined = service.User;

    expect(user).toBeUndefined();
    expect(mockWindow.sessionStorage.getItem).toHaveBeenCalled()
  });

  it('should return user if value in session storage', () => {
    (mockWindow.sessionStorage.getItem as jasmine.Spy)
      .and.returnValue(JSON.stringify({ name: 'User name' }))
    const user: User | undefined = service.User;

    expect(user).toEqual({ name: 'User name' });
    expect(mockWindow.sessionStorage.getItem).toHaveBeenCalled()
  });
});
