import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CriminalRecord } from 'src/app/model/criminalRecord.model';

import { CriminalRecordService } from './criminal-record.service';

describe('CriminalRecordService', () => {
  let service: CriminalRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriminalRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByPersonId should return a person', fakeAsync(() => {
    let getResponse: CriminalRecord | undefined;
    service.getByPersonId(1).subscribe(response => {
      getResponse = response;
    });
    tick(1000);
    expect(getResponse).toBeDefined();
    expect(getResponse?.id).toBe(1);
    expect(getResponse?.personId).toBe(1);
  }));
});
