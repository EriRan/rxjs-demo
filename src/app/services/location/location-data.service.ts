import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { LocationData } from 'src/app/model/locationData.model';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  locationDataList: Array<LocationData> = [];

  constructor() {
    this.locationDataList.push(new LocationData(1, 1, 123, 456));
  }

  /**
   * Simulates an API call to a get endpoint. Returns an observable that is returned after 1 second of delay
   * @param personId 
   * @returns 
   */
   getByPersonId(personId: number): Observable<LocationData | undefined> {
    const getObservable = of(this.locationDataList.find(locationData => locationData.personId === personId));
    return getObservable.pipe(
      delay(1000)
    );
  }
}
