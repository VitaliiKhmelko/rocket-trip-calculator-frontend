import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return this.httpClient.post<{ name: string, tripUuid: string | undefined }>(`${environment.apiUrl}/login`, {
      name
    })
  }
}
