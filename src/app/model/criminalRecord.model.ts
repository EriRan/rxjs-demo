export class CriminalRecord {
    id: number;
    personId: number;
    crimeDescription: string

    constructor(id:number, personId: number, crimeDescription: string) {
        this.id = id;
        this.personId = personId;
        this.crimeDescription = crimeDescription;
    }
  }