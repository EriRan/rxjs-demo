import { TestBed } from '@angular/core/testing';

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
});
