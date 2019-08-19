import { Component, OnInit, Input } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  personList: string[];

  constructor(
    personService: PersonsService
  ) {
    this.personList = personService.persons;
  }

  ngOnInit() {
  }



}
