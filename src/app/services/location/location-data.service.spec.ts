import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LocationData } from 'src/app/model/locationData.model';

import { LocationDataService } from './location-data.service';

describe('LocationDataService', () => {
  let service: LocationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByPersonId should return a person', fakeAsync(() => {
    let getResponse: LocationData | undefined;
    service.getLocationByPersonId(1).subscribe(response => {
      getResponse = response;
    });
    tick(1000);
    expect(getResponse).toBeDefined();
    expect(getResponse?.id).toBe(1);
    expect(getResponse?.personId).toBe(1);
  }));
});
