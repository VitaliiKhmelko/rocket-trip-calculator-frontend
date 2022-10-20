import { HttpClient, HttpParams } from '@angular/common/http';
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
export class TripHttpService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get trip that is in progress by attender's name
   * @param uuid Trip uuid
   * @returns trip in progress
   */
  getByUuid(uuid: string): Observable<Trip> {
    return this.httpClient.get<Trip>(`${environment.apiUrl}/trip`, {
      params: new HttpParams().append('uuid', uuid),
    })
  }
}
