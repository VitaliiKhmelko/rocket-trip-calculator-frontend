import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthenticationHttpService } from './authentication-http.service';

describe('AuthenticationHttpService', () => {
  let service: AuthenticationHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AuthenticationHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the GET endpoint', (): void => {
    // Act
    service.login$('Brent').subscribe();

    // Assert
    const testRequest = httpTestingController.expectOne(
      `http://localhost:8282/api/login`,
    );

    expect(testRequest.request.method).toBe('POST');
  });
});
