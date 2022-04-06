export class LocationData {
    id: number;
    personId: number;
    city: string

    constructor(id:number, personId: number, city: string) {
        this.id = id;
        this.personId = personId;
        this.city = city;
    }
  }