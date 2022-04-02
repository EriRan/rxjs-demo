import { Injectable } from '@angular/core';
import { CriminalRecord } from 'src/app/model/criminalRecord.model';

@Injectable({
  providedIn: 'root'
})
export class CriminalRecordService {

  criminalRecordMap = new Map();

  constructor() {
    const personOne = new CriminalRecord(1, 1, 'Cooking crystal meth');
    this.criminalRecordMap.set(personOne.id, personOne);
  }
}
