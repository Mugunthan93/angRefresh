import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  personList: string[];
  private subscriptionList: Subscription;

  constructor(
    private personService: PersonsService
  ) {
  }

  ngOnInit() {
    this.personList = this.personService.persons;
    this.personService.fetchPerson();
    this.subscriptionList = this.personService.personChanged.subscribe(
      persons => {
        this.personList = persons;
      }
    );
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }

  ngOnDestroy() {
    this.subscriptionList.unsubscribe();
  }



}
