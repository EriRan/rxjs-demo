import { Component, OnInit } from '@angular/core';
import { combineLatest, first, map, tap } from 'rxjs';
import { CriminalRecord } from '../model/criminalRecord.model';
import { LocationData } from '../model/locationData.model';
import { Person } from '../model/person.model';
import { CriminalRecordService } from '../services/criminalRecord/criminal-record.service';
import { LocationDataService } from '../services/location/location-data.service';
import { PersonService } from '../services/person/person.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  person?: Person;
  criminalRecord?: CriminalRecord;
  locationData?: LocationData;
  callDone: boolean = false;

  constructor(
    private personService: PersonService,
    private criminalRecordService: CriminalRecordService,
    private locationDataService: LocationDataService
  ) {}

  ngOnInit(): void {}

  /**
   * HTML
   */
  displayPerson(id: number): void {
    this.person = undefined;
    this.criminalRecord = undefined;
    this.locationData = undefined;
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
        combineLatest([
          this.criminalRecordService.getCriminalDataByPersonId(this.person.id),
          this.locationDataService.getLocationByPersonId(this.person.id),
        ])
          .pipe(first())
          .subscribe(([criminalRecord, locationData]) => {
            this.criminalRecord = criminalRecord;
            this.locationData = locationData;
          });
      });
  }
}
