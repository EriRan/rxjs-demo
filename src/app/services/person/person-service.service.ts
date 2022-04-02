import { Injectable } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  personMap = new Map();

  constructor() {
    const personOne = new Person(1, 'Walter White');
    this.personMap.set(personOne.id, personOne);
  }
}
