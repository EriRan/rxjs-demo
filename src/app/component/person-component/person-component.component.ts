import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {

  @Input('person') person?: Person;

  constructor() { }

  ngOnInit(): void {
    
  }

}
