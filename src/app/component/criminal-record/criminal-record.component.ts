import { Component, Input, OnInit } from '@angular/core';
import { CriminalRecord } from 'src/app/model/criminalRecord.model';

@Component({
  selector: 'app-criminal-record',
  templateUrl: './criminal-record.component.html',
  styleUrls: ['./criminal-record.component.css']
})
export class CriminalRecordComponent implements OnInit {

  @Input('criminalRecord') criminalRecord?: CriminalRecord;

  constructor() { }

  ngOnInit(): void {
    this.criminalRecord?.crimeDescription
  }

}
