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
  isFetching = false;
  private subscriptionList: Subscription;

  constructor(
    private personService: PersonsService
  ) {
  }

  ngOnInit() {
    this.personList = this.personService.persons;
    this.subscriptionList = this.personService.personChanged.subscribe(
      persons => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
    this.personService.fetchPerson();
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }

  ngOnDestroy() {
    this.subscriptionList.unsubscribe();
  }



}
