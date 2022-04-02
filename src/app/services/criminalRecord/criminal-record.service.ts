import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CriminalRecord } from 'src/app/model/criminalRecord.model';

@Injectable({
  providedIn: 'root'
})
export class CriminalRecordService {

  private criminalRecordList: Array<CriminalRecord> = [];

  constructor() {
    this.criminalRecordList.push(new CriminalRecord(1, 1, 'Cooking crystal meth'));
  }

  /**
   * Simulates an API call to a get endpoint. Returns an observable that is returned after 1 second of delay
   * @param personId 
   * @returns 
   */
  getByPersonId(personId: number): Observable<CriminalRecord | undefined> {
    const getObservable = of(this.criminalRecordList.find(criminalRecord => criminalRecord.personId === personId));
    return getObservable.pipe(
      delay(1000)
    );
  }
}
