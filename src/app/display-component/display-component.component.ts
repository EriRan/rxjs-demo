import { Component, OnInit } from '@angular/core';
import { filter, first, map, of } from 'rxjs';
import { Person } from '../model/person.model';
import { PersonService } from '../services/person/person.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css'],
})
export class DisplayComponentComponent implements OnInit {

  person?: Person;
  callDone: boolean = false;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  /**
   * HTML
   */
  displayPerson(id: number): void {
    this.person = undefined;
    this.callDone = true;
    this.personService
      .get(id)
      .subscribe((responsePerson) => {
        if (!responsePerson) {
          this.person = new Person(-1, 'NOT FOUND');
          return;
        }
        this.person = responsePerson;
      });
  }
}
