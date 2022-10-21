import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

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
      `http://localhost:8282/api/trip?uuid=tripUuid`,
    );

    expect(testRequest.request.method).toBe('GET');
  });
});
