import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Login user to show a new or existed trip
   * @param name User name
   */
  login(name: string) {
    return this.httpClient.post<User>(`${environment.apiUrl}/login`, {
      name
    })
  }
}
