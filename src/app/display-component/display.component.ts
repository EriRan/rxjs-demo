import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Person } from '../model/person.model';
import { PersonService } from '../services/person/person.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {

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
      .pipe(first())
      .subscribe((responsePerson) => {
        if (!responsePerson) {
          this.person = new Person(-1, 'NOT FOUND');
          return;
        }
        this.person = responsePerson;
      });
  }
}
