import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TripHttpService } from './trip-http.service';

describe('TripService', () => {
  let service: TripHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TripHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
