import { Component, Input, OnInit } from '@angular/core';
import { LocationData } from 'src/app/model/locationData.model';

@Component({
  selector: 'app-location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {

  @Input('locationData') locationData?: LocationData;

  constructor() { }

  ngOnInit(): void {
  }

}
