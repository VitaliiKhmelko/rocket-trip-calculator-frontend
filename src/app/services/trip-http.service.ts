import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participator } from '../models/participator';
import { Trip } from '../models/trip';

/**
 * Http service to work with Trips API
 */
@Injectable({
  providedIn: 'root'
})
export class TripHttpService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get trip that is in progress by attender's name
   * @param id Trip unique identifier
   * @returns trip in progress
   */
  get$(id: string): Observable<Trip> {
    return this.httpClient.get<Trip>(`${environment.apiUrl}/trips/${id}`);
  }

  /**
   * Creates a new trip
   * @param trip new trip to create
   * @returns trip id
   */
  put$(trip: Partial<Trip>): Observable<string> {
    return this.httpClient.put<string>(`${environment.apiUrl}/trips`, trip);
  }

  patch$(id: string, trip: Partial<Trip>): Observable<Trip> {
    return this.httpClient.patch<Trip>(`${environment.apiUrl}/trips/${id}`, trip);
  }

  patchCost$(id: string, payload: { [key: string]: Participator }) {
    return this.httpClient.patch<string>(`${environment.apiUrl}/trips/${id}/participators`, payload)
  }
}
