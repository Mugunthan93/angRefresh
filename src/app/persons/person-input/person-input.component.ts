import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {



  enteredPersonName = '';

  constructor(
    private prsService: PersonsService
  ) { }

  ngOnInit() {
  }

  onCreatePerson() {
    console.log("person created using two way bind!!" + this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
