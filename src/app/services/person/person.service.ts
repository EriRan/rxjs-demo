import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Person } from 'src/app/model/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  personMap = new Map();

  constructor() {
    const personOne = new Person(1, 'Walter White');
    this.personMap.set(personOne.id, personOne);
  }

  /**
   * Simulates an API call to a get endpoint. Returns an observable that is returned after 1 second of delay
   * @param id primary id of a person
   * @returns person or undefined if not found
   */
  get(id: number): Observable<Person | undefined> {
    // Create a person observable
    const getObservable = of(this.personMap.get(id));
    // Add some artificial delay to the request
    return getObservable.pipe(delay(1000));
  }
}
