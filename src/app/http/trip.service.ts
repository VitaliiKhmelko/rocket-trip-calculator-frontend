import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from '../models/trip';

/**
 * Http service to work with Trips API
 */
@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get trip that is in progress by attender's name
   * @param name User name
   * @returns trip in progress
   */
  getByUserName(name: string): Observable<Trip> {
    return this.httpClient.get<Trip>(`${environment.apiUrl}/trip`)
  }
}
