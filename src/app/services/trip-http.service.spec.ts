import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Trip } from '../models/trip';

import { TripHttpService } from './trip-http.service';

describe('TripService', () => {
  let service: TripHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TripHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the GET endpoint', (): void => {
    // Act
    service.get$('tripUuid').subscribe();

    // Assert
    const testRequest = httpTestingController.expectOne(
      `http://localhost:3600/trips/tripUuid`,
    );

    expect(testRequest.request.method).toBe('GET');
  });

  it('should call the PATCH endpoint', (): void => {
    // Act
    service.patch$('tripUuid', {} as Trip).subscribe();

    // Assert
    const testRequest = httpTestingController.expectOne(
      `http://localhost:3600/trips/tripUuid`,
    );

    expect(testRequest.request.method).toBe('PATCH');
  });

  it('should call the PUT endpoint', (): void => {
    // Act
    service.put$({ id: 'tripUuid' }).subscribe();

    // Assert
    const testRequest = httpTestingController.expectOne(
      `http://localhost:3600/trips`,
    );

    expect(testRequest.request.method).toBe('PUT');
  });

  it('should call the PATCH costs endpoint', (): void => {
    // Act
    service.patchCost$('trip', { 'Eugene': { name: 'Eugene', expenses: [] } }).subscribe();

    // Assert
    const testRequest = httpTestingController.expectOne(
      `http://localhost:3600/trips/trip/participators`,
    );

    expect(testRequest.request.method).toBe('PATCH');
  });
});
