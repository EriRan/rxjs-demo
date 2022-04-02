import { Injectable } from '@angular/core';
import { LocationData } from 'src/app/model/locationData.model';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  locationDataList: Array<LocationData> = [];

  constructor() {
    this.locationDataList.push(new LocationData(1, 1, 123, 456));
  }
}
