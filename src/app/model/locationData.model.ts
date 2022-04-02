export class LocationData {
    id: number;
    personId: number;
    locationLatitude: number;
    locationLongitude: number;

    constructor(id:number, personId: number, locationLatitude: number, locationLongitude: number) {
        this.id = id;
        this.personId = personId;
        this.locationLatitude = locationLatitude;
        this.locationLongitude = locationLongitude;
    }
  }