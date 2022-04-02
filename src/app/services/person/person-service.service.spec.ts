import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Person } from 'src/app/model/person.model';

import { PersonServiceService } from './person-service.service';

describe('PersonServiceService', () => {
  let service: PersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByPersonId should return a person', fakeAsync(() => {
    let getResponse: Person | undefined;
    service.get(1).subscribe(response => {
      getResponse = response;
    });
    tick(1000);
    expect(getResponse).toBeDefined();
    expect(getResponse?.id).toBe(1);
  }));
});
