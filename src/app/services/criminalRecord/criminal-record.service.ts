import { Injectable } from '@angular/core';
import { CriminalRecord } from 'src/app/model/criminalRecord.model';

@Injectable({
  providedIn: 'root'
})
export class CriminalRecordService {

  criminalRecordList: Array<CriminalRecord> = [];

  constructor() {
    this.criminalRecordList.push(new CriminalRecord(1, 1, 'Cooking crystal meth'));
  }
}
