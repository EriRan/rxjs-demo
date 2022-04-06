import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input('person') person?: Person;

  constructor() { }

  ngOnInit(): void {
    
  }

}
